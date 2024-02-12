export const replaceNullWithUndefined = <T>(input: T): T | undefined => {
  input = JSON.parse(JSON.stringify(input));

  if (input === null) {
    return undefined;
  }

  if (isObject(input)) {
    const result: Record<string, any> = {};

    let hasNonNullProperty = false;
    for (const [key, value] of Object.entries(input)) {
      const processedValue = replaceNullWithUndefined(value);
      if (processedValue !== undefined) {
        hasNonNullProperty = true;
      }
      result[key] = processedValue;
    }

    return hasNonNullProperty ? (result as T) : undefined;
  }

  if (Array.isArray(input)) {
    const processedArray = (input as unknown[]).map(replaceNullWithUndefined);
    return processedArray.some((item) => item !== undefined)
      ? (processedArray as T)
      : undefined;
  }

  return input;
};

const isObject = (value: unknown): value is Record<string, any> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

// Define a test object with some null values
const testObject = {
  data: {
    name: {
      set: 'Test Program 5.1',
    },
    startDate: {
      set: '2024-02-02T00:00:00.100Z',
    },
    dueDate: {
      set: '2024-02-22T00:00:00.000Z',
    },
    description: {
      set: 'desc',
    },
    Images: {
      createMany: {
        data: [],
      },
      deleteMany: [
        {
          url: {
            in: [],
          },
        },
      ],
    },
    category: {
      connectOrCreate: {
        where: {
          id: 5,
        },
        create: {
          name: 'Program 5',
        },
      },
    },
  },
  where: {
    id: 5,
  },
  select: {
    id: true,
    name: true,
    startDate: true,
    dueDate: true,
    description: true,
    createdById: true,
    categoryId: true,
    createdAt: true,
    updatedAt: true,
    Images: {
      select: {
        url: true,
      },
    },
    category: {
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    },
  },
};

// // Call the function with the test object
// const result = replaceNullWithUndefined(testObject);

// // Log the result to the console
// console.log(result);
