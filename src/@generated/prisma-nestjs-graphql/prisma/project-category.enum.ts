import { registerEnumType } from '@nestjs/graphql';

export enum ProjectCategory {
    PROPERTY = "PROPERTY",
    BUSSINESS = "BUSSINESS"
}


registerEnumType(ProjectCategory, { name: 'ProjectCategory', description: undefined })
