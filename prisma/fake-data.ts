import { UserRole, UserType, Theme, UserStatus, AccountCategory, TransactionType, TransactionCategory, PointType, TransactionStatus, UserNotificationCategory, ShippingStatus, FileType, ProjectCategory } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeCity() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeCityComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
  };
}
export function fakeDistrict() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeDistrictComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
  };
}
export function fakePostalCode() {
  return {
    code: faker.datatype.number(),
  };
}
export function fakePostalCodeComplete() {
  return {
    id: faker.datatype.number(),
    code: faker.datatype.number(),
  };
}
export function fakeAddress() {
  return {
    name: faker.name.fullName(),
  };
}
export function fakeAddressComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    cityId: faker.datatype.number(),
    districtId: faker.datatype.number(),
    postalCodeId: faker.datatype.number(),
  };
}
export function fakeSchool() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeSchoolComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    addressId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: undefined,
    email: faker.internet.email(),
    userType: faker.helpers.arrayElement([UserType.PARENT, UserType.SCHOOL_HEAD, UserType.STUDENT] as const),
    avatarUrl: undefined,
    whatsappNumber: faker.lorem.words(5),
    whatsappVerifiedAt: undefined,
    password: faker.lorem.words(5),
    referralCode: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: undefined,
    email: faker.internet.email(),
    addressId: faker.datatype.number(),
    userRole: UserRole.MEMBER,
    userType: faker.helpers.arrayElement([UserType.PARENT, UserType.SCHOOL_HEAD, UserType.STUDENT] as const),
    avatarUrl: undefined,
    whatsappNumber: faker.lorem.words(5),
    whatsappVerifiedAt: undefined,
    password: faker.lorem.words(5),
    referralCode: faker.lorem.words(5),
    referredById: undefined,
    status: UserStatus.PENDING,
    schoolId: undefined,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    theme: Theme.LIGHT,
  };
}
export function fakeAccount() {
  return {
    accountNumber: undefined,
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
    accountCategory: faker.helpers.arrayElement([AccountCategory.EQUITY, AccountCategory.PROJECT, AccountCategory.COMISSION, AccountCategory.CASH, AccountCategory.PLATFORM, AccountCategory.BANK, AccountCategory.DEBT] as const),
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.datatype.number(),
    accountNumber: undefined,
    name: faker.name.fullName(),
    balance: 0,
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    userId: faker.datatype.uuid(),
    accountCategory: faker.helpers.arrayElement([AccountCategory.EQUITY, AccountCategory.PROJECT, AccountCategory.COMISSION, AccountCategory.CASH, AccountCategory.PLATFORM, AccountCategory.BANK, AccountCategory.DEBT] as const),
  };
}
export function fakeTransaction() {
  return {
    amount: faker.datatype.float(),
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    transactionCategory: faker.helpers.arrayElement([TransactionCategory.INVESTMENT, TransactionCategory.INVESTMENT_RETURN, TransactionCategory.COMISSION_BONUS, TransactionCategory.WITHDRAWAL, TransactionCategory.MEMBER_REGISTRATION, TransactionCategory.STUDENT_REGISTRATION] as const),
  };
}
export function fakeTransactionComplete() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.float(),
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    transactionCategory: faker.helpers.arrayElement([TransactionCategory.INVESTMENT, TransactionCategory.INVESTMENT_RETURN, TransactionCategory.COMISSION_BONUS, TransactionCategory.WITHDRAWAL, TransactionCategory.MEMBER_REGISTRATION, TransactionCategory.STUDENT_REGISTRATION] as const),
    fromAccountId: faker.datatype.number(),
    toAccountId: faker.datatype.number(),
    createdAt: new Date(),
    userId: undefined,
  };
}
export function fakePointTransaction() {
  return {
    amount: faker.datatype.float(),
    pointType: faker.helpers.arrayElement([PointType.REFERRING, PointType.REDEEMING] as const),
    transactionType: faker.helpers.arrayElement([TransactionType.DEBIT, TransactionType.CREDIT] as const),
  };
}
export function fakePointTransactionComplete() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.float(),
    pointType: faker.helpers.arrayElement([PointType.REFERRING, PointType.REDEEMING] as const),
    transactionType: faker.helpers.arrayElement([TransactionType.DEBIT, TransactionType.CREDIT] as const),
    currentBalance: 0,
    userId: faker.datatype.uuid(),
    createdAt: new Date(),
  };
}
export function fakeSession() {
  return {
    token: faker.lorem.words(5),
    expiresAt: faker.datatype.datetime(),
    device: faker.lorem.words(5),
    ipAddress: faker.datatype.float(),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.datatype.number(),
    token: faker.lorem.words(5),
    expiresAt: faker.datatype.datetime(),
    createdAt: new Date(),
    userId: faker.datatype.uuid(),
    device: faker.lorem.words(5),
    ipAddress: faker.datatype.float(),
  };
}
export function fakeUserNotification() {
  return {
    title: faker.lorem.words(5),
    subtitle: faker.lorem.words(5),
    content: faker.lorem.words(5),
    category: faker.helpers.arrayElement([UserNotificationCategory.BILLING_ALERT, UserNotificationCategory.ANNOUNCEMENT, UserNotificationCategory.CHAT_MESSAGE] as const),
    deepLink: undefined,
    fcmToken: undefined,
  };
}
export function fakeUserNotificationComplete() {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.words(5),
    subtitle: faker.lorem.words(5),
    content: faker.lorem.words(5),
    createdAt: new Date(),
    category: faker.helpers.arrayElement([UserNotificationCategory.BILLING_ALERT, UserNotificationCategory.ANNOUNCEMENT, UserNotificationCategory.CHAT_MESSAGE] as const),
    isRead: false,
    isCleared: false,
    userId: faker.datatype.uuid(),
    deepLink: undefined,
    fcmToken: undefined,
  };
}
export function fakeBank() {
  return {
    name: faker.name.fullName(),
    logoUrl: faker.lorem.words(5),
    accountNumber: faker.datatype.number(),
  };
}
export function fakeBankComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    logoUrl: faker.lorem.words(5),
    accountNumber: faker.datatype.number(),
    accountId: faker.datatype.number(),
  };
}
export function fakeHotel() {
  return {
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    rating: faker.datatype.float(),
    startDate: faker.datatype.datetime(),
    quota: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeHotelComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    addressId: faker.datatype.number(),
    description: faker.lorem.words(5),
    rating: faker.datatype.float(),
    startDate: faker.datatype.datetime(),
    quota: faker.datatype.number(),
    createdById: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCheckIn() {
  return {
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCheckInComplete() {
  return {
    id: faker.datatype.number(),
    userId: faker.datatype.uuid(),
    hotelId: faker.datatype.number(),
    checkInAt: new Date(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeOrder() {
  return {
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    shippingId: undefined,
    isFullPaid: faker.datatype.boolean(),
    cost: faker.datatype.float(),
    platformFee: faker.datatype.float(),
    total: faker.datatype.float(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeOrderComplete() {
  return {
    id: faker.datatype.number(),
    status: faker.helpers.arrayElement([TransactionStatus.PROCESSING, TransactionStatus.PENDING, TransactionStatus.FAILED, TransactionStatus.CANCELLED, TransactionStatus.COMPLETED] as const),
    orderById: faker.datatype.uuid(),
    shippingId: undefined,
    isFullPaid: faker.datatype.boolean(),
    cost: faker.datatype.float(),
    platformFee: faker.datatype.float(),
    total: faker.datatype.float(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeItem() {
  return {
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    price: faker.datatype.float(),
    qty: faker.datatype.number(),
    userRole: faker.helpers.arrayElement([UserRole.MEMBER, UserRole.ADMIN, UserRole.SUPERUSER, UserRole.STUDENT] as const),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeItemComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    price: faker.datatype.float(),
    qty: faker.datatype.number(),
    userRole: faker.helpers.arrayElement([UserRole.MEMBER, UserRole.ADMIN, UserRole.SUPERUSER, UserRole.STUDENT] as const),
    orderId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeShipping() {
  return {
    logisticName: faker.lorem.words(5),
    deliveryDate: undefined,
    shippingStatus: faker.helpers.arrayElement([ShippingStatus.PROCESSING, ShippingStatus.DELIVERING, ShippingStatus.DELIVERED] as const),
    courier: undefined,
    estimatedTime: undefined,
    trackingNo: undefined,
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeShippingComplete() {
  return {
    id: faker.datatype.number(),
    logisticName: faker.lorem.words(5),
    deliveryDate: undefined,
    shippingStatus: faker.helpers.arrayElement([ShippingStatus.PROCESSING, ShippingStatus.DELIVERING, ShippingStatus.DELIVERED] as const),
    addressId: faker.datatype.number(),
    courier: undefined,
    estimatedTime: undefined,
    trackingNo: undefined,
    orderId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePayment() {
  return {
    adminFee: faker.datatype.float(),
    totalPayment: faker.datatype.float(),
  };
}
export function fakePaymentComplete() {
  return {
    id: faker.datatype.number(),
    adminFee: faker.datatype.float(),
    totalPayment: faker.datatype.float(),
    orderId: faker.datatype.number(),
    transactionId: faker.datatype.number(),
    createdAt: new Date(),
  };
}
export function fakePaymentConfirmation() {
  return {
    ProofUrl: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakePaymentConfirmationComplete() {
  return {
    id: faker.datatype.number(),
    ProofUrl: faker.lorem.words(5),
    paymentId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProgram() {
  return {
    name: faker.name.fullName(),
    startDate: faker.datatype.datetime(),
    dueDate: undefined,
    description: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProgramComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    startDate: faker.datatype.datetime(),
    dueDate: undefined,
    description: faker.lorem.words(5),
    createdById: faker.datatype.uuid(),
    categoryId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProgramCategory() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProgramCategoryComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeReward() {
  return {
    name: faker.name.fullName(),
    pointCost: faker.datatype.float(),
    description: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeRewardComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    pointCost: faker.datatype.float(),
    description: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeFile() {
  return {
    fileType: faker.helpers.arrayElement([FileType.MP4, FileType.JPG, FileType.PNG, FileType.PDF] as const),
    filesize: faker.datatype.float(),
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    url: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeFileComplete() {
  return {
    id: faker.datatype.number(),
    fileType: faker.helpers.arrayElement([FileType.MP4, FileType.JPG, FileType.PNG, FileType.PDF] as const),
    filesize: faker.datatype.float(),
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    url: faker.lorem.words(5),
    createdById: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeImages() {
  return {
    fileType: faker.helpers.arrayElement([FileType.MP4, FileType.JPG, FileType.PNG, FileType.PDF] as const),
    filesize: faker.datatype.float(),
    url: faker.lorem.words(5),
  };
}
export function fakeImagesComplete() {
  return {
    id: faker.datatype.number(),
    fileType: faker.helpers.arrayElement([FileType.MP4, FileType.JPG, FileType.PNG, FileType.PDF] as const),
    filesize: faker.datatype.float(),
    url: faker.lorem.words(5),
    hotelImageId: undefined,
    programImageId: undefined,
    rewardImageId: undefined,
    projectImageId: undefined,
    createdAt: new Date(),
  };
}
export function fakeFaq() {
  return {
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeFaqComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProject() {
  return {
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    projectCategory: faker.helpers.arrayElement([ProjectCategory.PROPERTY, ProjectCategory.BUSSINESS] as const),
    startDate: faker.datatype.datetime(),
    endDate: faker.datatype.datetime(),
    returnRate: faker.datatype.float(),
    goalAmount: faker.datatype.number(),
    currentAmount: faker.datatype.float(),
    minimumInvestment: faker.datatype.number(),
    maxInvestor: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProjectComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: faker.lorem.words(5),
    projectCategory: faker.helpers.arrayElement([ProjectCategory.PROPERTY, ProjectCategory.BUSSINESS] as const),
    startDate: faker.datatype.datetime(),
    endDate: faker.datatype.datetime(),
    returnRate: faker.datatype.float(),
    goalAmount: faker.datatype.number(),
    currentAmount: faker.datatype.float(),
    minimumInvestment: faker.datatype.number(),
    maxInvestor: faker.datatype.number(),
    accountId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}