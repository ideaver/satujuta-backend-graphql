import { join } from 'path';
import * as fs from 'fs/promises';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function populateProvinceCityDistricSubdistric() {
  try {
    // Define the path to the JSON file within the Prisma folder
    const jsonFilePath = join(__dirname, 'kodepos.json');
    // Read the JSON file
    const jsonData = await fs.readFile(jsonFilePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);

    // Create maps to track unique names and assigned IDs
    const provinceMap = new Map();
    const cityMap = new Map();
    const districtMap = new Map();
    const subdistrictMap = new Map();

    // Create arrays to store models data
    const provinceModels: {
      id: number;
      name: string;
    }[] = [];
    const cityModels: {
      id: number;
      name: string;
      provinceId: number;
    }[] = [];
    const districtModels: {
      id: number;
      name: string;
      cityId: number;
    }[] = [];
    const subdistrictModels: {
      id: number;
      name: string;
      districtId: number;
      postalCode: string;
    }[] = [];

    parsedData.forEach((locationData) => {
      // Handling provinces
      if (!provinceMap.has(locationData.province)) {
        const provinceId = provinceMap.size + 1;
        provinceMap.set(locationData.province, provinceMap.size + 1);
        provinceModels.push({ id: provinceId, name: locationData.province });
      }

      // Handling cities
      const cityKey = locationData.province + '-' + locationData.city;
      if (!cityMap.has(cityKey)) {
        const cityId = cityMap.size + 1;
        cityMap.set(cityKey, cityMap.size + 1);
        cityModels.push({
          id: cityId,
          name: locationData.city,
          provinceId: provinceMap.get(locationData.province),
        });
      }

      // Handling districts
      const districtKey = cityKey + '-' + locationData.district;
      if (!districtMap.has(districtKey)) {
        const districtId = districtMap.size + 1;
        districtMap.set(districtKey, districtMap.size + 1);
        districtModels.push({
          id: districtId,
          name: locationData.district,
          cityId: cityMap.get(cityKey),
        });
      }

      // Handling subdistricts
      const subdistrictKey = districtKey + '-' + locationData.subdistrict;
      if (!subdistrictMap.has(subdistrictKey)) {
        const subdistrictId = subdistrictMap.size + 1;
        subdistrictMap.set(subdistrictKey, subdistrictMap.size + 1);
        subdistrictModels.push({
          id: subdistrictId,
          name: locationData.subdistrict,
          districtId: districtMap.get(districtKey),
          postalCode: locationData.postal_code, // Convert to number if necessary
        });
      }
    });

    // Now, use Prisma's createMany to insert the data
    // await prisma.$transaction(async (prisma) => {

    // });

    await prisma.province
      .createMany({
        data: provinceModels,
      })
      .then((res) => {
        console.log('province query finished');
        return res;
      });
    await prisma.city
      .createMany({
        data: cityModels,
      })
      .then((res) => {
        console.log('city query finished');
        return res;
      });
    await prisma.district
      .createMany({
        data: districtModels,
      })
      .then((res) => {
        console.log('district query finished');
        return res;
      });
    await prisma.subdistrict
      .createMany({
        data: subdistrictModels,
      })
      .then((res) => {
        console.log(' subdistrict query finished');
        return res;
      });

    console.log('Data successfully populated into the database.');
  } catch (error) {
    console.error('Error populating the database:', error);
  }
}
