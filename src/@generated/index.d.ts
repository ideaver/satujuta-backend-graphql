import { Prisma } from '@prisma/client';
export declare enum WithdrawalRequestScalarFieldEnum {
    id = "id",
    userId = "userId",
    amount = "amount",
    status = "status",
    proofUrl = "proofUrl",
    proofDescription = "proofDescription",
    transactionId = "transactionId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum UserNotificationScalarFieldEnum {
    id = "id",
    title = "title",
    subtitle = "subtitle",
    content = "content",
    createdAt = "createdAt",
    category = "category",
    isRead = "isRead",
    isCleared = "isCleared",
    userId = "userId",
    deepLink = "deepLink",
    fcmToken = "fcmToken"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    addressId = "addressId",
    userRole = "userRole",
    userType = "userType",
    avatarUrl = "avatarUrl",
    whatsappNumber = "whatsappNumber",
    whatsappVerifiedAt = "whatsappVerifiedAt",
    password = "password",
    referralCode = "referralCode",
    referredById = "referredById",
    status = "status",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    theme = "theme"
}
export declare enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    proofUrl = "proofUrl",
    status = "status",
    transactionCategory = "transactionCategory",
    fromAccountId = "fromAccountId",
    toAccountId = "toAccountId",
    invoiceId = "invoiceId",
    installmentId = "installmentId",
    withdrawalRequestId = "withdrawalRequestId",
    uniqueCode = "uniqueCode",
    createdAt = "createdAt"
}
export declare enum SubdistrictScalarFieldEnum {
    id = "id",
    name = "name",
    districtId = "districtId",
    postalCode = "postalCode"
}
export declare enum ShippingScalarFieldEnum {
    id = "id",
    logisticName = "logisticName",
    deliveryDate = "deliveryDate",
    shippingStatus = "shippingStatus",
    addressId = "addressId",
    courier = "courier",
    estimatedTime = "estimatedTime",
    trackingNo = "trackingNo",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum SessionScalarFieldEnum {
    id = "id",
    token = "token",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    userId = "userId",
    device = "device",
    ipAddress = "ipAddress"
}
export declare enum SchoolScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum RewardClaimScalarFieldEnum {
    id = "id",
    userId = "userId",
    rewardId = "rewardId",
    processedAt = "processedAt",
    createdAt = "createdAt"
}
export declare enum RewardScalarFieldEnum {
    id = "id",
    name = "name",
    pointCost = "pointCost",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProvinceScalarFieldEnum {
    id = "id",
    name = "name"
}
export declare enum ProjectScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    projectCategory = "projectCategory",
    startDate = "startDate",
    endDate = "endDate",
    returnRate = "returnRate",
    goalAmount = "goalAmount",
    maxGoalAmountVersion = "maxGoalAmountVersion",
    minimumInvestment = "minimumInvestment",
    maxInvestor = "maxInvestor",
    maxInvestorVersion = "maxInvestorVersion",
    accountId = "accountId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProgramCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProgramScalarFieldEnum {
    id = "id",
    name = "name",
    startDate = "startDate",
    dueDate = "dueDate",
    description = "description",
    createdById = "createdById",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum UserType {
    PARENT = "PARENT",
    SCHOOL_HEAD = "SCHOOL_HEAD",
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    HOUSEWIFE = "HOUSEWIFE",
    ENTREPRENEUR = "ENTREPRENEUR",
    WORKER = "WORKER",
    OTHER = "OTHER"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    INACTIVE = "INACTIVE"
}
export declare enum UserRole {
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    SUPERUSER = "SUPERUSER",
    STUDENT = "STUDENT"
}
export declare enum UserNotificationCategory {
    ANNOUNCEMENT = "ANNOUNCEMENT",
    REFERRAL = "REFERRAL",
    REWARD = "REWARD",
    WITHDRAWAL = "WITHDRAWAL",
    INVESTMENT = "INVESTMENT",
    COMISSION = "COMISSION",
    PROJECT = "PROJECT",
    PROGRAM = "PROGRAM",
    CHECK_IN = "CHECK_IN",
    INVOICE = "INVOICE",
    SHIPPING = "SHIPPING",
    ORDER = "ORDER",
    ACCOUNT = "ACCOUNT",
    TRANSACTION = "TRANSACTION",
    POINT_TRANSACTION = "POINT_TRANSACTION",
    INSTALLMENT = "INSTALLMENT",
    WITHDRAWAL_REQUEST = "WITHDRAWAL_REQUEST",
    USER = "USER",
    FILE = "FILE"
}
export declare enum TransactionStatus {
    PROCESSING = "PROCESSING",
    PENDING = "PENDING",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum TransactionCategory {
    INVESTMENT = "INVESTMENT",
    INVESTMENT_RETURN = "INVESTMENT_RETURN",
    COMISSION_BONUS = "COMISSION_BONUS",
    WITHDRAWAL = "WITHDRAWAL",
    MEMBER_REGISTRATION = "MEMBER_REGISTRATION",
    STUDENT_REGISTRATION = "STUDENT_REGISTRATION",
    REFERRING = "REFERRING",
    REDEEMING = "REDEEMING"
}
export declare enum Theme {
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum ShippingStatus {
    PROCESSING = "PROCESSING",
    DELIVERING = "DELIVERING",
    DELIVERED = "DELIVERED"
}
export declare enum ProjectCategory {
    PROPERTY = "PROPERTY",
    BUSSINESS = "BUSSINESS"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum InstallmentStatus {
    UPCOMING = "UPCOMING",
    PAID = "PAID"
}
export declare enum FileType {
    UNKNOWN = "UNKNOWN",
    MP4 = "MP4",
    JPG = "JPG",
    PNG = "PNG",
    PDF = "PDF"
}
export declare enum FaqType {
    REFERRAL_PAGE = "REFERRAL_PAGE",
    DASHBOARD_PAGE = "DASHBOARD_PAGE",
    REWARD_PAGE = "REWARD_PAGE",
    PROJECT_PAGE = "PROJECT_PAGE"
}
export declare enum AccountCategory {
    EQUITY = "EQUITY",
    PROJECT = "PROJECT",
    COMISSION = "COMISSION",
    CASH = "CASH",
    PLATFORM = "PLATFORM",
    BANK = "BANK",
    DEBT = "DEBT",
    POINT = "POINT"
}
export declare enum OrderScalarFieldEnum {
    id = "id",
    status = "status",
    orderById = "orderById",
    shippingId = "shippingId",
    invoiceId = "invoiceId",
    platformFee = "platformFee",
    total = "total",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    cost = "cost",
    userRole = "userRole",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum InvoiceScalarFieldEnum {
    id = "id",
    adminFee = "adminFee",
    amount = "amount",
    uniqueCode = "uniqueCode",
    createdAt = "createdAt"
}
export declare enum InstallmentScalarFieldEnum {
    id = "id",
    number = "number",
    lateFee = "lateFee",
    amount = "amount",
    dueDate = "dueDate",
    status = "status",
    transactionId = "transactionId",
    invoiceId = "invoiceId"
}
export declare enum ImagesScalarFieldEnum {
    id = "id",
    fileType = "fileType",
    fileSize = "fileSize",
    url = "url",
    hotelImageId = "hotelImageId",
    programImageId = "programImageId",
    rewardImageId = "rewardImageId",
    projectImageId = "projectImageId",
    createdAt = "createdAt"
}
export declare enum HotelScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    description = "description",
    rating = "rating",
    startDate = "startDate",
    quota = "quota",
    createdById = "createdById",
    createdAt = "createdAt",
    version = "version",
    updatedAt = "updatedAt"
}
export declare enum FileScalarFieldEnum {
    id = "id",
    fileType = "fileType",
    filesize = "filesize",
    name = "name",
    description = "description",
    url = "url",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum FaqScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    type = "type"
}
export declare enum DistrictScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId"
}
export declare enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    provinceId = "provinceId"
}
export declare enum CheckInScalarFieldEnum {
    id = "id",
    userId = "userId",
    hotelId = "hotelId",
    checkInAt = "checkInAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum CartScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    membershipItemId = "membershipItemId",
    projectItemId = "projectItemId",
    quantity = "quantity",
    price = "price",
    cost = "cost",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum BankScalarFieldEnum {
    id = "id",
    name = "name",
    logoUrl = "logoUrl",
    accountNumber = "accountNumber",
    isActive = "isActive",
    accountId = "accountId"
}
export declare enum AddressScalarFieldEnum {
    id = "id",
    name = "name",
    subdistrictId = "subdistrictId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum AccountScalarFieldEnum {
    id = "id",
    accountNumber = "accountNumber",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    accountCategory = "accountCategory"
}
export declare class AccountAggregateArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountAvgAggregateInput {
    id?: true;
    accountNumber?: true;
}
export declare class AccountAvgAggregate {
    id?: number;
    accountNumber?: number;
}
export declare class AccountAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
}
export declare class AccountCountAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
    _all?: true;
}
export declare class AccountCountAggregate {
    id: number;
    accountNumber: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    accountCategory: number;
    _all: number;
}
export declare class AccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountCount {
    transactionOrigins?: number;
    transactionDestination?: number;
}
export declare class AccountCreateManyUserInputEnvelope {
    data: Array<AccountCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class AccountCreateManyUserInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
}
export declare class AccountCreateManyInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
}
export declare class AccountCreateNestedManyWithoutUserInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
export declare class AccountCreateNestedOneWithoutBankAccountInput {
    create?: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutProjectInput {
    create?: InstanceType<typeof AccountCreateWithoutProjectInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProjectInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutTransactionDestinationInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionDestinationInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionDestinationInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutTransactionOriginsInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionOriginsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionOriginsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateOrConnectWithoutBankAccountInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
}
export declare class AccountCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutProjectInput>;
}
export declare class AccountCreateOrConnectWithoutTransactionDestinationInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutTransactionDestinationInput>;
}
export declare class AccountCreateOrConnectWithoutTransactionOriginsInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutTransactionOriginsInput>;
}
export declare class AccountCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutUserInput>;
}
export declare class AccountCreateWithoutBankAccountInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactionOrigins?: InstanceType<typeof TransactionCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutProjectInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactionOrigins?: InstanceType<typeof TransactionCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionCreateNestedManyWithoutToAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutTransactionDestinationInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactionOrigins?: InstanceType<typeof TransactionCreateNestedManyWithoutFromAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutTransactionOriginsInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactionDestination?: InstanceType<typeof TransactionCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateWithoutUserInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountCreateInput {
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    user: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
    transactionOrigins?: InstanceType<typeof TransactionCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankCreateNestedOneWithoutAccountInput>;
}
export declare class AccountGroupByArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    by: Array<keyof typeof AccountScalarFieldEnum>;
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountGroupBy {
    id: number;
    accountNumber?: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class AccountListRelationFilter {
    every?: InstanceType<typeof AccountWhereInput>;
    some?: InstanceType<typeof AccountWhereInput>;
    none?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountMaxAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
}
export declare class AccountMaxAggregate {
    id?: number;
    accountNumber?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
    accountCategory?: keyof typeof AccountCategory;
}
export declare class AccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountMinAggregateInput {
    id?: true;
    accountNumber?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    accountCategory?: true;
}
export declare class AccountMinAggregate {
    id?: number;
    accountNumber?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
    accountCategory?: keyof typeof AccountCategory;
}
export declare class AccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
}
export declare class AccountOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}
export declare class AccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    accountCategory?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    transactionOrigins?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    transactionDestination?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
    bankAccount?: InstanceType<typeof BankOrderByWithRelationInput>;
}
export declare class AccountRelationFilter {
    is?: InstanceType<typeof AccountWhereInput>;
    isNot?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryWithAggregatesFilter>;
}
export declare class AccountScalarWhereInput {
    AND?: Array<AccountScalarWhereInput>;
    OR?: Array<AccountScalarWhereInput>;
    NOT?: Array<AccountScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof FloatNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
}
export declare class AccountSumAggregateInput {
    id?: true;
    accountNumber?: true;
}
export declare class AccountSumAggregate {
    id?: number;
    accountNumber?: number;
}
export declare class AccountSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
}
export declare class AccountUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
export declare class AccountUncheckedCreateWithoutBankAccountInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutProjectInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutToAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutTransactionDestinationInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutFromAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutTransactionOriginsInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactionDestination?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutUserInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedCreateInput {
    id?: number;
    accountNumber?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutFromAccountInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutToAccountInput>;
    project?: InstanceType<typeof ProjectUncheckedCreateNestedOneWithoutAccountInput>;
    bankAccount?: InstanceType<typeof BankUncheckedCreateNestedOneWithoutAccountInput>;
}
export declare class AccountUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateWithoutBankAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutProjectInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutToAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutTransactionDestinationInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutFromAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutTransactionOriginsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUncheckedUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUncheckedUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateManyMutationInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
}
export declare class AccountUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof AccountScalarWhereInput>;
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
}
export declare class AccountUpdateManyWithoutUserNestedInput {
    create?: Array<AccountCreateWithoutUserInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUpdateOneRequiredWithoutBankAccountNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutBankAccountInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutBankAccountInput>;
}
export declare class AccountUpdateOneRequiredWithoutProjectNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutProjectInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProjectInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutProjectInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutProjectInput>;
}
export declare class AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionDestinationInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionDestinationInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutTransactionDestinationInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutTransactionDestinationInput>;
}
export declare class AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionOriginsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionOriginsInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutTransactionOriginsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutTransactionOriginsInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutBankAccountInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutBankAccountInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutProjectInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutProjectInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutTransactionDestinationInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutTransactionDestinationInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutTransactionOriginsInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutTransactionOriginsInput>;
}
export declare class AccountUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AccountUpdateWithoutUserInput>;
}
export declare class AccountUpdateWithoutBankAccountInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactionOrigins?: InstanceType<typeof TransactionUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutProjectInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactionOrigins?: InstanceType<typeof TransactionUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUpdateManyWithoutToAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutTransactionDestinationInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactionOrigins?: InstanceType<typeof TransactionUpdateManyWithoutFromAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutTransactionOriginsInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutUserInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    transactionOrigins?: InstanceType<typeof TransactionUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpdateInput {
    accountNumber?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
    transactionOrigins?: InstanceType<typeof TransactionUpdateManyWithoutFromAccountNestedInput>;
    transactionDestination?: InstanceType<typeof TransactionUpdateManyWithoutToAccountNestedInput>;
    project?: InstanceType<typeof ProjectUpdateOneWithoutAccountNestedInput>;
    bankAccount?: InstanceType<typeof BankUpdateOneWithoutAccountNestedInput>;
}
export declare class AccountUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AccountUpdateWithoutUserInput>;
    create: InstanceType<typeof AccountCreateWithoutUserInput>;
}
export declare class AccountUpsertWithoutBankAccountInput {
    update: InstanceType<typeof AccountUpdateWithoutBankAccountInput>;
    create: InstanceType<typeof AccountCreateWithoutBankAccountInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutProjectInput {
    update: InstanceType<typeof AccountUpdateWithoutProjectInput>;
    create: InstanceType<typeof AccountCreateWithoutProjectInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutTransactionDestinationInput {
    update: InstanceType<typeof AccountUpdateWithoutTransactionDestinationInput>;
    create: InstanceType<typeof AccountCreateWithoutTransactionDestinationInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutTransactionOriginsInput {
    update: InstanceType<typeof AccountUpdateWithoutTransactionOriginsInput>;
    create: InstanceType<typeof AccountCreateWithoutTransactionOriginsInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountWhereUniqueInput {
    id?: number;
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    accountNumber?: InstanceType<typeof FloatNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transactionOrigins?: InstanceType<typeof TransactionListRelationFilter>;
    transactionDestination?: InstanceType<typeof TransactionListRelationFilter>;
    project?: InstanceType<typeof ProjectNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankNullableRelationFilter>;
}
export declare class AccountWhereInput {
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof FloatNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    accountCategory?: InstanceType<typeof EnumAccountCategoryFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transactionOrigins?: InstanceType<typeof TransactionListRelationFilter>;
    transactionDestination?: InstanceType<typeof TransactionListRelationFilter>;
    project?: InstanceType<typeof ProjectNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankNullableRelationFilter>;
}
export declare class Account {
    id: number;
    accountNumber: number | null;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    accountCategory: keyof typeof AccountCategory;
    user?: InstanceType<typeof User>;
    transactionOrigins?: Array<Transaction>;
    transactionDestination?: Array<Transaction>;
    project?: InstanceType<typeof Project> | null;
    bankAccount?: InstanceType<typeof Bank> | null;
    _count?: InstanceType<typeof AccountCount>;
}
export declare class AggregateAccount {
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class CreateManyAccountArgs {
    data: Array<AccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAccountArgs {
    data: InstanceType<typeof AccountCreateInput>;
}
export declare class DeleteManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class DeleteOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindFirstAccountOrThrowArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindFirstAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindUniqueAccountOrThrowArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAccountArgs {
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class UpdateOneAccountArgs {
    data: InstanceType<typeof AccountUpdateInput>;
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateInput>;
    update: InstanceType<typeof AccountUpdateInput>;
}
export declare class AddressAggregateArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressAvgAggregateInput {
    id?: true;
    subdistrictId?: true;
}
export declare class AddressAvgAggregate {
    id?: number;
    subdistrictId?: number;
}
export declare class AddressAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressCountAggregateInput {
    id?: true;
    name?: true;
    subdistrictId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class AddressCountAggregate {
    id: number;
    name: number;
    subdistrictId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class AddressCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class AddressCreateManySubdistrictInputEnvelope {
    data: Array<AddressCreateManySubdistrictInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManySubdistrictInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AddressCreateManyInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AddressCreateNestedManyWithoutSubdistrictInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedOneWithoutHotelInput {
    create?: InstanceType<typeof AddressCreateWithoutHotelInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutHotelInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutSchoolInput {
    create?: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutSchoolInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutShippingInput {
    create?: InstanceType<typeof AddressCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutShippingInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof AddressCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateOrConnectWithoutHotelInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutHotelInput>;
}
export declare class AddressCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutSchoolInput>;
}
export declare class AddressCreateOrConnectWithoutShippingInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutShippingInput>;
}
export declare class AddressCreateOrConnectWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutSubdistrictInput>;
}
export declare class AddressCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutUserInput>;
}
export declare class AddressCreateWithoutHotelInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutSchoolInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutShippingInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutSubdistrictInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutUserInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    user?: InstanceType<typeof UserCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutAddressInput>;
}
export declare class AddressGroupByArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithAggregationInput>;
    by: Array<keyof typeof AddressScalarFieldEnum>;
    having?: InstanceType<typeof AddressScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressGroupBy {
    id: number;
    name: string;
    subdistrictId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class AddressListRelationFilter {
    every?: InstanceType<typeof AddressWhereInput>;
    some?: InstanceType<typeof AddressWhereInput>;
    none?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressMaxAggregateInput {
    id?: true;
    name?: true;
    subdistrictId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class AddressMaxAggregate {
    id?: number;
    name?: string;
    subdistrictId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AddressMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class AddressMinAggregateInput {
    id?: true;
    name?: true;
    subdistrictId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class AddressMinAggregate {
    id?: number;
    name?: string;
    subdistrictId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AddressMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class AddressOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AddressOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AddressCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AddressMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AddressMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AddressSumOrderByAggregateInput>;
}
export declare class AddressOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    subdistrict?: InstanceType<typeof SubdistrictOrderByWithRelationInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    hotel?: InstanceType<typeof HotelOrderByWithRelationInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    Shipping?: InstanceType<typeof ShippingOrderByWithRelationInput>;
}
export declare class AddressRelationFilter {
    is?: InstanceType<typeof AddressWhereInput>;
    isNot?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: Array<AddressScalarWhereWithAggregatesInput>;
    OR?: Array<AddressScalarWhereWithAggregatesInput>;
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    subdistrictId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class AddressScalarWhereInput {
    AND?: Array<AddressScalarWhereInput>;
    OR?: Array<AddressScalarWhereInput>;
    NOT?: Array<AddressScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class AddressSumAggregateInput {
    id?: true;
    subdistrictId?: true;
}
export declare class AddressSumAggregate {
    id?: number;
    subdistrictId?: number;
}
export declare class AddressSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressUncheckedCreateNestedManyWithoutSubdistrictInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateWithoutHotelInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutSchoolInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutShippingInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutSubdistrictInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutUserInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedCreateInput {
    id?: number;
    name: string;
    subdistrictId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutAddressInput>;
    hotel?: InstanceType<typeof HotelUncheckedCreateNestedOneWithoutAddressInput>;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutAddressInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutAddressInput>;
}
export declare class AddressUncheckedUpdateManyWithoutSubdistrictNestedInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutSubdistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutSubdistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutSubdistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutShippingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutSubdistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUncheckedUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AddressUpdateManyWithWhereWithoutSubdistrictInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithoutSubdistrictNestedInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutSubdistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutSubdistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUpdateOneRequiredWithoutHotelNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutHotelInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutHotelInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutHotelInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutHotelInput>;
}
export declare class AddressUpdateOneRequiredWithoutSchoolNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutSchoolInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutSchoolInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutSchoolInput>;
}
export declare class AddressUpdateOneRequiredWithoutShippingNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutShippingInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutShippingInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutShippingInput>;
}
export declare class AddressUpdateOneRequiredWithoutUserNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutUserInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutUserInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutHotelInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutHotelInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutSchoolInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutSchoolInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutShippingInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutShippingInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutUserInput>;
}
export declare class AddressUpdateWithWhereUniqueWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutSubdistrictInput>;
}
export declare class AddressUpdateWithoutHotelInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutSchoolInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutShippingInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutSubdistrictInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutUserInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutAddressNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneWithoutAddressNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutAddressNestedInput>;
    Shipping?: InstanceType<typeof ShippingUpdateOneWithoutAddressNestedInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutSubdistrictInput>;
    create: InstanceType<typeof AddressCreateWithoutSubdistrictInput>;
}
export declare class AddressUpsertWithoutHotelInput {
    update: InstanceType<typeof AddressUpdateWithoutHotelInput>;
    create: InstanceType<typeof AddressCreateWithoutHotelInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutSchoolInput {
    update: InstanceType<typeof AddressUpdateWithoutSchoolInput>;
    create: InstanceType<typeof AddressCreateWithoutSchoolInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutShippingInput {
    update: InstanceType<typeof AddressUpdateWithoutShippingInput>;
    create: InstanceType<typeof AddressCreateWithoutShippingInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressUpsertWithoutUserInput {
    update: InstanceType<typeof AddressUpdateWithoutUserInput>;
    create: InstanceType<typeof AddressCreateWithoutUserInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressWhereUniqueInput {
    id?: number;
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    subdistrict?: InstanceType<typeof SubdistrictRelationFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
    hotel?: InstanceType<typeof HotelNullableRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    Shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
}
export declare class AddressWhereInput {
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    subdistrict?: InstanceType<typeof SubdistrictRelationFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
    hotel?: InstanceType<typeof HotelNullableRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    Shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
}
export declare class Address {
    id: number;
    name: string;
    subdistrictId: number;
    createdAt: Date;
    updatedAt: Date;
    subdistrict?: InstanceType<typeof Subdistrict>;
    user?: InstanceType<typeof User> | null;
    hotel?: InstanceType<typeof Hotel> | null;
    school?: InstanceType<typeof School> | null;
    Shipping?: InstanceType<typeof Shipping> | null;
}
export declare class AggregateAddress {
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class CreateManyAddressArgs {
    data: Array<AddressCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAddressArgs {
    data: InstanceType<typeof AddressCreateInput>;
}
export declare class DeleteManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class DeleteOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindFirstAddressOrThrowArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindFirstAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindUniqueAddressOrThrowArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAddressArgs {
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class UpdateOneAddressArgs {
    data: InstanceType<typeof AddressUpdateInput>;
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateInput>;
    update: InstanceType<typeof AddressUpdateInput>;
}
export declare class AggregateBank {
    _count?: InstanceType<typeof BankCountAggregate>;
    _avg?: InstanceType<typeof BankAvgAggregate>;
    _sum?: InstanceType<typeof BankSumAggregate>;
    _min?: InstanceType<typeof BankMinAggregate>;
    _max?: InstanceType<typeof BankMaxAggregate>;
}
export declare class BankAggregateArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankCountAggregateInput>;
    _avg?: InstanceType<typeof BankAvgAggregateInput>;
    _sum?: InstanceType<typeof BankSumAggregateInput>;
    _min?: InstanceType<typeof BankMinAggregateInput>;
    _max?: InstanceType<typeof BankMaxAggregateInput>;
}
export declare class BankAvgAggregateInput {
    id?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankAvgAggregate {
    id?: number;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankCountAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    isActive?: true;
    accountId?: true;
    _all?: true;
}
export declare class BankCountAggregate {
    id: number;
    name: number;
    logoUrl: number;
    accountNumber: number;
    isActive: number;
    accountId: number;
    _all: number;
}
export declare class BankCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankCreateManyInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive?: boolean;
    accountId: number;
}
export declare class BankCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class BankCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof BankCreateWithoutAccountInput>;
}
export declare class BankCreateWithoutAccountInput {
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive?: boolean;
}
export declare class BankCreateInput {
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive?: boolean;
    account: InstanceType<typeof AccountCreateNestedOneWithoutBankAccountInput>;
}
export declare class BankGroupByArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithAggregationInput>;
    by: Array<keyof typeof BankScalarFieldEnum>;
    having?: InstanceType<typeof BankScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankCountAggregateInput>;
    _avg?: InstanceType<typeof BankAvgAggregateInput>;
    _sum?: InstanceType<typeof BankSumAggregateInput>;
    _min?: InstanceType<typeof BankMinAggregateInput>;
    _max?: InstanceType<typeof BankMaxAggregateInput>;
}
export declare class BankGroupBy {
    id: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive: boolean;
    accountId: number;
    _count?: InstanceType<typeof BankCountAggregate>;
    _avg?: InstanceType<typeof BankAvgAggregate>;
    _sum?: InstanceType<typeof BankSumAggregate>;
    _min?: InstanceType<typeof BankMinAggregate>;
    _max?: InstanceType<typeof BankMaxAggregate>;
}
export declare class BankMaxAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    isActive?: true;
    accountId?: true;
}
export declare class BankMaxAggregate {
    id?: number;
    name?: string;
    logoUrl?: string;
    accountNumber?: number;
    isActive?: boolean;
    accountId?: number;
}
export declare class BankMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankMinAggregateInput {
    id?: true;
    name?: true;
    logoUrl?: true;
    accountNumber?: true;
    isActive?: true;
    accountId?: true;
}
export declare class BankMinAggregate {
    id?: number;
    name?: string;
    logoUrl?: string;
    accountNumber?: number;
    isActive?: boolean;
    accountId?: number;
}
export declare class BankMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankNullableRelationFilter {
    is?: InstanceType<typeof BankWhereInput>;
    isNot?: InstanceType<typeof BankWhereInput>;
}
export declare class BankOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BankCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof BankAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof BankMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BankMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof BankSumOrderByAggregateInput>;
}
export declare class BankOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logoUrl?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
}
export declare class BankScalarWhereWithAggregatesInput {
    AND?: Array<BankScalarWhereWithAggregatesInput>;
    OR?: Array<BankScalarWhereWithAggregatesInput>;
    NOT?: Array<BankScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    logoUrl?: InstanceType<typeof StringWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof FloatWithAggregatesFilter>;
    isActive?: InstanceType<typeof BoolWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class BankSumAggregateInput {
    id?: true;
    accountNumber?: true;
    accountId?: true;
}
export declare class BankSumAggregate {
    id?: number;
    accountNumber?: number;
    accountId?: number;
}
export declare class BankSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class BankUncheckedCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class BankUncheckedCreateWithoutAccountInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive?: boolean;
}
export declare class BankUncheckedCreateInput {
    id?: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive?: boolean;
    accountId: number;
}
export declare class BankUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUncheckedUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof BankUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof BankWhereInput>;
    delete?: InstanceType<typeof BankWhereInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof BankUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class BankUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class BankUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class BankUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class BankUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof BankCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof BankCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof BankUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof BankWhereInput>;
    delete?: InstanceType<typeof BankWhereInput>;
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof BankUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class BankUpdateToOneWithWhereWithoutAccountInput {
    where?: InstanceType<typeof BankWhereInput>;
    data: InstanceType<typeof BankUpdateWithoutAccountInput>;
}
export declare class BankUpdateWithoutAccountInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class BankUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    logoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutBankAccountNestedInput>;
}
export declare class BankUpsertWithoutAccountInput {
    update: InstanceType<typeof BankUpdateWithoutAccountInput>;
    create: InstanceType<typeof BankCreateWithoutAccountInput>;
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class BankWhereUniqueInput {
    id?: number;
    accountId?: number;
    AND?: Array<BankWhereInput>;
    OR?: Array<BankWhereInput>;
    NOT?: Array<BankWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    logoUrl?: InstanceType<typeof StringFilter>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class BankWhereInput {
    AND?: Array<BankWhereInput>;
    OR?: Array<BankWhereInput>;
    NOT?: Array<BankWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    logoUrl?: InstanceType<typeof StringFilter>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class Bank {
    id: number;
    name: string;
    logoUrl: string;
    accountNumber: number;
    isActive: boolean;
    accountId: number;
    account?: InstanceType<typeof Account>;
}
export declare class CreateManyBankArgs {
    data: Array<BankCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBankArgs {
    data: InstanceType<typeof BankCreateInput>;
}
export declare class DeleteManyBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class DeleteOneBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindFirstBankOrThrowArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindFirstBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindManyBankArgs {
    where?: InstanceType<typeof BankWhereInput>;
    orderBy?: Array<BankOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
export declare class FindUniqueBankOrThrowArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindUniqueBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpdateManyBankArgs {
    data: InstanceType<typeof BankUpdateManyMutationInput>;
    where?: InstanceType<typeof BankWhereInput>;
}
export declare class UpdateOneBankArgs {
    data: InstanceType<typeof BankUpdateInput>;
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpsertOneBankArgs {
    where: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof BankCreateInput>;
    update: InstanceType<typeof BankUpdateInput>;
}
export declare class AggregateCart {
    _count?: InstanceType<typeof CartCountAggregate>;
    _avg?: InstanceType<typeof CartAvgAggregate>;
    _sum?: InstanceType<typeof CartSumAggregate>;
    _min?: InstanceType<typeof CartMinAggregate>;
    _max?: InstanceType<typeof CartMaxAggregate>;
}
export declare class CartAggregateArgs {
    where?: InstanceType<typeof CartWhereInput>;
    orderBy?: Array<CartOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CartCountAggregateInput>;
    _avg?: InstanceType<typeof CartAvgAggregateInput>;
    _sum?: InstanceType<typeof CartSumAggregateInput>;
    _min?: InstanceType<typeof CartMinAggregateInput>;
    _max?: InstanceType<typeof CartMaxAggregateInput>;
}
export declare class CartAvgAggregateInput {
    id?: true;
    orderId?: true;
    membershipItemId?: true;
    projectItemId?: true;
    quantity?: true;
    price?: true;
    cost?: true;
}
export declare class CartAvgAggregate {
    id?: number;
    orderId?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity?: number;
    price?: number;
    cost?: number;
}
export declare class CartAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: keyof typeof SortOrder;
    projectItemId?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
}
export declare class CartCountAggregateInput {
    id?: true;
    orderId?: true;
    membershipItemId?: true;
    projectItemId?: true;
    quantity?: true;
    price?: true;
    cost?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CartCountAggregate {
    id: number;
    orderId: number;
    membershipItemId: number;
    projectItemId: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CartCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: keyof typeof SortOrder;
    projectItemId?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CartCreateManyMembershipItemInputEnvelope {
    data: Array<CartCreateManyMembershipItemInput>;
    skipDuplicates?: boolean;
}
export declare class CartCreateManyMembershipItemInput {
    id?: number;
    orderId: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartCreateManyOrderInputEnvelope {
    data: Array<CartCreateManyOrderInput>;
    skipDuplicates?: boolean;
}
export declare class CartCreateManyOrderInput {
    id?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartCreateManyProjectItemInputEnvelope {
    data: Array<CartCreateManyProjectItemInput>;
    skipDuplicates?: boolean;
}
export declare class CartCreateManyProjectItemInput {
    id?: number;
    orderId: number;
    membershipItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartCreateManyInput {
    id?: number;
    orderId: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartCreateNestedManyWithoutMembershipItemInput {
    create?: Array<CartCreateWithoutMembershipItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutMembershipItemInput>;
    createMany?: InstanceType<typeof CartCreateManyMembershipItemInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartCreateNestedManyWithoutOrderInput {
    create?: Array<CartCreateWithoutOrderInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof CartCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartCreateNestedManyWithoutProjectItemInput {
    create?: Array<CartCreateWithoutProjectItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutProjectItemInput>;
    createMany?: InstanceType<typeof CartCreateManyProjectItemInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartCreateOrConnectWithoutMembershipItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CartCreateWithoutMembershipItemInput>;
}
export declare class CartCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CartCreateWithoutOrderInput>;
}
export declare class CartCreateOrConnectWithoutProjectItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CartCreateWithoutProjectItemInput>;
}
export declare class CartCreateWithoutMembershipItemInput {
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutCartInput>;
    projectItem?: InstanceType<typeof ProjectCreateNestedOneWithoutOrderCartInput>;
}
export declare class CartCreateWithoutOrderInput {
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipItem?: InstanceType<typeof ItemCreateNestedOneWithoutCartInput>;
    projectItem?: InstanceType<typeof ProjectCreateNestedOneWithoutOrderCartInput>;
}
export declare class CartCreateWithoutProjectItemInput {
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutCartInput>;
    membershipItem?: InstanceType<typeof ItemCreateNestedOneWithoutCartInput>;
}
export declare class CartCreateInput {
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutCartInput>;
    membershipItem?: InstanceType<typeof ItemCreateNestedOneWithoutCartInput>;
    projectItem?: InstanceType<typeof ProjectCreateNestedOneWithoutOrderCartInput>;
}
export declare class CartGroupByArgs {
    where?: InstanceType<typeof CartWhereInput>;
    orderBy?: Array<CartOrderByWithAggregationInput>;
    by: Array<keyof typeof CartScalarFieldEnum>;
    having?: InstanceType<typeof CartScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CartCountAggregateInput>;
    _avg?: InstanceType<typeof CartAvgAggregateInput>;
    _sum?: InstanceType<typeof CartSumAggregateInput>;
    _min?: InstanceType<typeof CartMinAggregateInput>;
    _max?: InstanceType<typeof CartMaxAggregateInput>;
}
export declare class CartGroupBy {
    id: number;
    orderId: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CartCountAggregate>;
    _avg?: InstanceType<typeof CartAvgAggregate>;
    _sum?: InstanceType<typeof CartSumAggregate>;
    _min?: InstanceType<typeof CartMinAggregate>;
    _max?: InstanceType<typeof CartMaxAggregate>;
}
export declare class CartListRelationFilter {
    every?: InstanceType<typeof CartWhereInput>;
    some?: InstanceType<typeof CartWhereInput>;
    none?: InstanceType<typeof CartWhereInput>;
}
export declare class CartMaxAggregateInput {
    id?: true;
    orderId?: true;
    membershipItemId?: true;
    projectItemId?: true;
    quantity?: true;
    price?: true;
    cost?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CartMaxAggregate {
    id?: number;
    orderId?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity?: number;
    price?: number;
    cost?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: keyof typeof SortOrder;
    projectItemId?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CartMinAggregateInput {
    id?: true;
    orderId?: true;
    membershipItemId?: true;
    projectItemId?: true;
    quantity?: true;
    price?: true;
    cost?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CartMinAggregate {
    id?: number;
    orderId?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity?: number;
    price?: number;
    cost?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: keyof typeof SortOrder;
    projectItemId?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CartOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CartOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: InstanceType<typeof SortOrderInput>;
    projectItemId?: InstanceType<typeof SortOrderInput>;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CartCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CartAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CartMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CartMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CartSumOrderByAggregateInput>;
}
export declare class CartOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: InstanceType<typeof SortOrderInput>;
    projectItemId?: InstanceType<typeof SortOrderInput>;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    membershipItem?: InstanceType<typeof ItemOrderByWithRelationInput>;
    projectItem?: InstanceType<typeof ProjectOrderByWithRelationInput>;
}
export declare class CartScalarWhereWithAggregatesInput {
    AND?: Array<CartScalarWhereWithAggregatesInput>;
    OR?: Array<CartScalarWhereWithAggregatesInput>;
    NOT?: Array<CartScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    membershipItemId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    projectItemId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    quantity?: InstanceType<typeof IntWithAggregatesFilter>;
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    cost?: InstanceType<typeof FloatWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CartScalarWhereInput {
    AND?: Array<CartScalarWhereInput>;
    OR?: Array<CartScalarWhereInput>;
    NOT?: Array<CartScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    membershipItemId?: InstanceType<typeof IntNullableFilter>;
    projectItemId?: InstanceType<typeof IntNullableFilter>;
    quantity?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof FloatFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class CartSumAggregateInput {
    id?: true;
    orderId?: true;
    membershipItemId?: true;
    projectItemId?: true;
    quantity?: true;
    price?: true;
    cost?: true;
}
export declare class CartSumAggregate {
    id?: number;
    orderId?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity?: number;
    price?: number;
    cost?: number;
}
export declare class CartSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    membershipItemId?: keyof typeof SortOrder;
    projectItemId?: keyof typeof SortOrder;
    quantity?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
}
export declare class CartUncheckedCreateNestedManyWithoutMembershipItemInput {
    create?: Array<CartCreateWithoutMembershipItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutMembershipItemInput>;
    createMany?: InstanceType<typeof CartCreateManyMembershipItemInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartUncheckedCreateNestedManyWithoutOrderInput {
    create?: Array<CartCreateWithoutOrderInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutOrderInput>;
    createMany?: InstanceType<typeof CartCreateManyOrderInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartUncheckedCreateNestedManyWithoutProjectItemInput {
    create?: Array<CartCreateWithoutProjectItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutProjectItemInput>;
    createMany?: InstanceType<typeof CartCreateManyProjectItemInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
}
export declare class CartUncheckedCreateWithoutMembershipItemInput {
    id?: number;
    orderId: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartUncheckedCreateWithoutOrderInput {
    id?: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartUncheckedCreateWithoutProjectItemInput {
    id?: number;
    orderId: number;
    membershipItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartUncheckedCreateInput {
    id?: number;
    orderId: number;
    membershipItemId?: number;
    projectItemId?: number;
    quantity: number;
    price: number;
    cost: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CartUncheckedUpdateManyWithoutMembershipItemNestedInput {
    create?: Array<CartCreateWithoutMembershipItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutMembershipItemInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutMembershipItemInput>;
    createMany?: InstanceType<typeof CartCreateManyMembershipItemInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutMembershipItemInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutMembershipItemInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUncheckedUpdateManyWithoutMembershipItemInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateManyWithoutOrderNestedInput {
    create?: Array<CartCreateWithoutOrderInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutOrderInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof CartCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUncheckedUpdateManyWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateManyWithoutProjectItemNestedInput {
    create?: Array<CartCreateWithoutProjectItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutProjectItemInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutProjectItemInput>;
    createMany?: InstanceType<typeof CartCreateManyProjectItemInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutProjectItemInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutProjectItemInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUncheckedUpdateManyWithoutProjectItemInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateWithoutMembershipItemInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateWithoutProjectItemInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    membershipItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectItemId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUpdateManyMutationInput {
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CartUpdateManyWithWhereWithoutMembershipItemInput {
    where: InstanceType<typeof CartScalarWhereInput>;
    data: InstanceType<typeof CartUpdateManyMutationInput>;
}
export declare class CartUpdateManyWithWhereWithoutOrderInput {
    where: InstanceType<typeof CartScalarWhereInput>;
    data: InstanceType<typeof CartUpdateManyMutationInput>;
}
export declare class CartUpdateManyWithWhereWithoutProjectItemInput {
    where: InstanceType<typeof CartScalarWhereInput>;
    data: InstanceType<typeof CartUpdateManyMutationInput>;
}
export declare class CartUpdateManyWithoutMembershipItemNestedInput {
    create?: Array<CartCreateWithoutMembershipItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutMembershipItemInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutMembershipItemInput>;
    createMany?: InstanceType<typeof CartCreateManyMembershipItemInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutMembershipItemInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutMembershipItemInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUpdateManyWithoutOrderNestedInput {
    create?: Array<CartCreateWithoutOrderInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutOrderInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutOrderInput>;
    createMany?: InstanceType<typeof CartCreateManyOrderInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutOrderInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutOrderInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUpdateManyWithoutProjectItemNestedInput {
    create?: Array<CartCreateWithoutProjectItemInput>;
    connectOrCreate?: Array<CartCreateOrConnectWithoutProjectItemInput>;
    upsert?: Array<CartUpsertWithWhereUniqueWithoutProjectItemInput>;
    createMany?: InstanceType<typeof CartCreateManyProjectItemInputEnvelope>;
    set?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CartWhereUniqueInput, 'id'>>;
    update?: Array<CartUpdateWithWhereUniqueWithoutProjectItemInput>;
    updateMany?: Array<CartUpdateManyWithWhereWithoutProjectItemInput>;
    deleteMany?: Array<CartScalarWhereInput>;
}
export declare class CartUpdateWithWhereUniqueWithoutMembershipItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CartUpdateWithoutMembershipItemInput>;
}
export declare class CartUpdateWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CartUpdateWithoutOrderInput>;
}
export declare class CartUpdateWithWhereUniqueWithoutProjectItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CartUpdateWithoutProjectItemInput>;
}
export declare class CartUpdateWithoutMembershipItemInput {
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutCartNestedInput>;
    projectItem?: InstanceType<typeof ProjectUpdateOneWithoutOrderCartNestedInput>;
}
export declare class CartUpdateWithoutOrderInput {
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    membershipItem?: InstanceType<typeof ItemUpdateOneWithoutCartNestedInput>;
    projectItem?: InstanceType<typeof ProjectUpdateOneWithoutOrderCartNestedInput>;
}
export declare class CartUpdateWithoutProjectItemInput {
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutCartNestedInput>;
    membershipItem?: InstanceType<typeof ItemUpdateOneWithoutCartNestedInput>;
}
export declare class CartUpdateInput {
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutCartNestedInput>;
    membershipItem?: InstanceType<typeof ItemUpdateOneWithoutCartNestedInput>;
    projectItem?: InstanceType<typeof ProjectUpdateOneWithoutOrderCartNestedInput>;
}
export declare class CartUpsertWithWhereUniqueWithoutMembershipItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CartUpdateWithoutMembershipItemInput>;
    create: InstanceType<typeof CartCreateWithoutMembershipItemInput>;
}
export declare class CartUpsertWithWhereUniqueWithoutOrderInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CartUpdateWithoutOrderInput>;
    create: InstanceType<typeof CartCreateWithoutOrderInput>;
}
export declare class CartUpsertWithWhereUniqueWithoutProjectItemInput {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CartUpdateWithoutProjectItemInput>;
    create: InstanceType<typeof CartCreateWithoutProjectItemInput>;
}
export declare class CartWhereUniqueInput {
    id?: number;
    AND?: Array<CartWhereInput>;
    OR?: Array<CartWhereInput>;
    NOT?: Array<CartWhereInput>;
    orderId?: InstanceType<typeof IntFilter>;
    membershipItemId?: InstanceType<typeof IntNullableFilter>;
    projectItemId?: InstanceType<typeof IntNullableFilter>;
    quantity?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof FloatFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
    membershipItem?: InstanceType<typeof ItemNullableRelationFilter>;
    projectItem?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class CartWhereInput {
    AND?: Array<CartWhereInput>;
    OR?: Array<CartWhereInput>;
    NOT?: Array<CartWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    membershipItemId?: InstanceType<typeof IntNullableFilter>;
    projectItemId?: InstanceType<typeof IntNullableFilter>;
    quantity?: InstanceType<typeof IntFilter>;
    price?: InstanceType<typeof FloatFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
    membershipItem?: InstanceType<typeof ItemNullableRelationFilter>;
    projectItem?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class Cart {
    id: number;
    orderId: number;
    membershipItemId: number | null;
    projectItemId: number | null;
    quantity: number;
    price: number;
    cost: number;
    createdAt: Date;
    updatedAt: Date;
    order?: InstanceType<typeof Order>;
    membershipItem?: InstanceType<typeof Item> | null;
    projectItem?: InstanceType<typeof Project> | null;
}
export declare class CreateManyCartArgs {
    data: Array<CartCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCartArgs {
    data: InstanceType<typeof CartCreateInput>;
}
export declare class DeleteManyCartArgs {
    where?: InstanceType<typeof CartWhereInput>;
}
export declare class DeleteOneCartArgs {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
export declare class FindFirstCartOrThrowArgs {
    where?: InstanceType<typeof CartWhereInput>;
    orderBy?: Array<CartOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}
export declare class FindFirstCartArgs {
    where?: InstanceType<typeof CartWhereInput>;
    orderBy?: Array<CartOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}
export declare class FindManyCartArgs {
    where?: InstanceType<typeof CartWhereInput>;
    orderBy?: Array<CartOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}
export declare class FindUniqueCartOrThrowArgs {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCartArgs {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCartArgs {
    data: InstanceType<typeof CartUpdateManyMutationInput>;
    where?: InstanceType<typeof CartWhereInput>;
}
export declare class UpdateOneCartArgs {
    data: InstanceType<typeof CartUpdateInput>;
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCartArgs {
    where: Prisma.AtLeast<CartWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CartCreateInput>;
    update: InstanceType<typeof CartUpdateInput>;
}
export declare class AggregateCheckIn {
    _count?: InstanceType<typeof CheckInCountAggregate>;
    _avg?: InstanceType<typeof CheckInAvgAggregate>;
    _sum?: InstanceType<typeof CheckInSumAggregate>;
    _min?: InstanceType<typeof CheckInMinAggregate>;
    _max?: InstanceType<typeof CheckInMaxAggregate>;
}
export declare class CheckInAggregateArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CheckInCountAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumAggregateInput>;
    _min?: InstanceType<typeof CheckInMinAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxAggregateInput>;
}
export declare class CheckInAvgAggregateInput {
    id?: true;
    hotelId?: true;
}
export declare class CheckInAvgAggregate {
    id?: number;
    hotelId?: number;
}
export declare class CheckInAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
}
export declare class CheckInCountAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CheckInCountAggregate {
    id: number;
    userId: number;
    hotelId: number;
    checkInAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CheckInCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInCreateManyHotelInputEnvelope {
    data: Array<CheckInCreateManyHotelInput>;
    skipDuplicates?: boolean;
}
export declare class CheckInCreateManyHotelInput {
    id?: number;
    userId: string;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateManyUserInputEnvelope {
    data: Array<CheckInCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class CheckInCreateManyUserInput {
    id?: number;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateManyInput {
    id?: number;
    userId: string;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInCreateNestedManyWithoutHotelInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInCreateNestedManyWithoutUserInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInCreateOrConnectWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateWithoutHotelInput>;
}
export declare class CheckInCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateWithoutUserInput>;
}
export declare class CheckInCreateWithoutHotelInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInCreateWithoutUserInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hotel: InstanceType<typeof HotelCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInCreateInput {
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutCheckInsInput>;
    hotel: InstanceType<typeof HotelCreateNestedOneWithoutCheckInsInput>;
}
export declare class CheckInGroupByArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithAggregationInput>;
    by: Array<keyof typeof CheckInScalarFieldEnum>;
    having?: InstanceType<typeof CheckInScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CheckInCountAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumAggregateInput>;
    _min?: InstanceType<typeof CheckInMinAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxAggregateInput>;
}
export declare class CheckInGroupBy {
    id: number;
    userId: string;
    hotelId: number;
    checkInAt: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CheckInCountAggregate>;
    _avg?: InstanceType<typeof CheckInAvgAggregate>;
    _sum?: InstanceType<typeof CheckInSumAggregate>;
    _min?: InstanceType<typeof CheckInMinAggregate>;
    _max?: InstanceType<typeof CheckInMaxAggregate>;
}
export declare class CheckInListRelationFilter {
    every?: InstanceType<typeof CheckInWhereInput>;
    some?: InstanceType<typeof CheckInWhereInput>;
    none?: InstanceType<typeof CheckInWhereInput>;
}
export declare class CheckInMaxAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CheckInMaxAggregate {
    id?: number;
    userId?: string;
    hotelId?: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInMinAggregateInput {
    id?: true;
    userId?: true;
    hotelId?: true;
    checkInAt?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CheckInMinAggregate {
    id?: number;
    userId?: string;
    hotelId?: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CheckInOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CheckInOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CheckInCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CheckInAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CheckInMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CheckInMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CheckInSumOrderByAggregateInput>;
}
export declare class CheckInOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
    checkInAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    hotel?: InstanceType<typeof HotelOrderByWithRelationInput>;
}
export declare class CheckInScalarWhereWithAggregatesInput {
    AND?: Array<CheckInScalarWhereWithAggregatesInput>;
    OR?: Array<CheckInScalarWhereWithAggregatesInput>;
    NOT?: Array<CheckInScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    hotelId?: InstanceType<typeof IntWithAggregatesFilter>;
    checkInAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CheckInScalarWhereInput {
    AND?: Array<CheckInScalarWhereInput>;
    OR?: Array<CheckInScalarWhereInput>;
    NOT?: Array<CheckInScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class CheckInSumAggregateInput {
    id?: true;
    hotelId?: true;
}
export declare class CheckInSumAggregate {
    id?: number;
    hotelId?: number;
}
export declare class CheckInSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    hotelId?: keyof typeof SortOrder;
}
export declare class CheckInUncheckedCreateNestedManyWithoutHotelInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
export declare class CheckInUncheckedCreateWithoutHotelInput {
    id?: number;
    userId: string;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedCreateWithoutUserInput {
    id?: number;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedCreateInput {
    id?: number;
    userId: string;
    hotelId: number;
    checkInAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CheckInUncheckedUpdateManyWithoutHotelNestedInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutHotelInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutHotelInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateWithoutHotelInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUpdateManyMutationInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CheckInUpdateManyWithWhereWithoutHotelInput {
    where: InstanceType<typeof CheckInScalarWhereInput>;
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
}
export declare class CheckInUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof CheckInScalarWhereInput>;
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
}
export declare class CheckInUpdateManyWithoutHotelNestedInput {
    create?: Array<CheckInCreateWithoutHotelInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutHotelInput>;
    createMany?: InstanceType<typeof CheckInCreateManyHotelInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutHotelInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutHotelInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUpdateManyWithoutUserNestedInput {
    create?: Array<CheckInCreateWithoutUserInput>;
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutUserInput>;
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof CheckInCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
    update?: Array<CheckInUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<CheckInScalarWhereInput>;
}
export declare class CheckInUpdateWithWhereUniqueWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CheckInUpdateWithoutHotelInput>;
}
export declare class CheckInUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CheckInUpdateWithoutUserInput>;
}
export declare class CheckInUpdateWithoutHotelInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpdateWithoutUserInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotel?: InstanceType<typeof HotelUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpdateInput {
    checkInAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutCheckInsNestedInput>;
    hotel?: InstanceType<typeof HotelUpdateOneRequiredWithoutCheckInsNestedInput>;
}
export declare class CheckInUpsertWithWhereUniqueWithoutHotelInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CheckInUpdateWithoutHotelInput>;
    create: InstanceType<typeof CheckInCreateWithoutHotelInput>;
}
export declare class CheckInUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CheckInUpdateWithoutUserInput>;
    create: InstanceType<typeof CheckInCreateWithoutUserInput>;
}
export declare class CheckInWhereUniqueInput {
    id?: number;
    AND?: Array<CheckInWhereInput>;
    OR?: Array<CheckInWhereInput>;
    NOT?: Array<CheckInWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    hotel?: InstanceType<typeof HotelRelationFilter>;
}
export declare class CheckInWhereInput {
    AND?: Array<CheckInWhereInput>;
    OR?: Array<CheckInWhereInput>;
    NOT?: Array<CheckInWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    hotelId?: InstanceType<typeof IntFilter>;
    checkInAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    hotel?: InstanceType<typeof HotelRelationFilter>;
}
export declare class CheckIn {
    id: number;
    userId: string;
    hotelId: number;
    checkInAt: Date;
    createdAt: Date;
    updatedAt: Date;
    user?: InstanceType<typeof User>;
    hotel?: InstanceType<typeof Hotel>;
}
export declare class CreateManyCheckInArgs {
    data: Array<CheckInCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCheckInArgs {
    data: InstanceType<typeof CheckInCreateInput>;
}
export declare class DeleteManyCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
}
export declare class DeleteOneCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class FindFirstCheckInOrThrowArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindFirstCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindManyCheckInArgs {
    where?: InstanceType<typeof CheckInWhereInput>;
    orderBy?: Array<CheckInOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CheckInScalarFieldEnum>;
}
export declare class FindUniqueCheckInOrThrowArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCheckInArgs {
    data: InstanceType<typeof CheckInUpdateManyMutationInput>;
    where?: InstanceType<typeof CheckInWhereInput>;
}
export declare class UpdateOneCheckInArgs {
    data: InstanceType<typeof CheckInUpdateInput>;
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCheckInArgs {
    where: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CheckInCreateInput>;
    update: InstanceType<typeof CheckInUpdateInput>;
}
export declare class AggregateCity {
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityAggregateArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityAvgAggregateInput {
    id?: true;
    provinceId?: true;
}
export declare class CityAvgAggregate {
    id?: number;
    provinceId?: number;
}
export declare class CityAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityCountAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
    _all?: true;
}
export declare class CityCountAggregate {
    id: number;
    name: number;
    provinceId: number;
    _all: number;
}
export declare class CityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityCount {
    districts?: number;
}
export declare class CityCreateManyProvinceInputEnvelope {
    data: Array<CityCreateManyProvinceInput>;
    skipDuplicates?: boolean;
}
export declare class CityCreateManyProvinceInput {
    id?: number;
    name: string;
}
export declare class CityCreateManyInput {
    id?: number;
    name: string;
    provinceId: number;
}
export declare class CityCreateNestedManyWithoutProvinceInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
}
export declare class CityCreateNestedOneWithoutDistrictsInput {
    create?: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutDistrictsInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class CityCreateOrConnectWithoutDistrictsInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutDistrictsInput>;
}
export declare class CityCreateOrConnectWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutProvinceInput>;
}
export declare class CityCreateWithoutDistrictsInput {
    name: string;
    province: InstanceType<typeof ProvinceCreateNestedOneWithoutCitiesInput>;
}
export declare class CityCreateWithoutProvinceInput {
    name: string;
    districts?: InstanceType<typeof DistrictCreateNestedManyWithoutCityInput>;
}
export declare class CityCreateInput {
    name: string;
    province: InstanceType<typeof ProvinceCreateNestedOneWithoutCitiesInput>;
    districts?: InstanceType<typeof DistrictCreateNestedManyWithoutCityInput>;
}
export declare class CityGroupByArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithAggregationInput>;
    by: Array<keyof typeof CityScalarFieldEnum>;
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityGroupBy {
    id: number;
    name: string;
    provinceId: number;
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityListRelationFilter {
    every?: InstanceType<typeof CityWhereInput>;
    some?: InstanceType<typeof CityWhereInput>;
    none?: InstanceType<typeof CityWhereInput>;
}
export declare class CityMaxAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
}
export declare class CityMaxAggregate {
    id?: number;
    name?: string;
    provinceId?: number;
}
export declare class CityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityMinAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
}
export declare class CityMinAggregate {
    id?: number;
    name?: string;
    provinceId?: number;
}
export declare class CityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}
export declare class CityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
    province?: InstanceType<typeof ProvinceOrderByWithRelationInput>;
    districts?: InstanceType<typeof DistrictOrderByRelationAggregateInput>;
}
export declare class CityRelationFilter {
    is?: InstanceType<typeof CityWhereInput>;
    isNot?: InstanceType<typeof CityWhereInput>;
}
export declare class CityScalarWhereWithAggregatesInput {
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    provinceId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class CityScalarWhereInput {
    AND?: Array<CityScalarWhereInput>;
    OR?: Array<CityScalarWhereInput>;
    NOT?: Array<CityScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
}
export declare class CitySumAggregateInput {
    id?: true;
    provinceId?: true;
}
export declare class CitySumAggregate {
    id?: number;
    provinceId?: number;
}
export declare class CitySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityUncheckedCreateNestedManyWithoutProvinceInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
}
export declare class CityUncheckedCreateWithoutDistrictsInput {
    id?: number;
    name: string;
    provinceId: number;
}
export declare class CityUncheckedCreateWithoutProvinceInput {
    id?: number;
    name: string;
    districts?: InstanceType<typeof DistrictUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedCreateInput {
    id?: number;
    name: string;
    provinceId: number;
    districts?: InstanceType<typeof DistrictUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedUpdateManyWithoutProvinceNestedInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    upsert?: Array<CityUpsertWithWhereUniqueWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    set?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    update?: Array<CityUpdateWithWhereUniqueWithoutProvinceInput>;
    updateMany?: Array<CityUpdateManyWithWhereWithoutProvinceInput>;
    deleteMany?: Array<CityScalarWhereInput>;
}
export declare class CityUncheckedUpdateManyWithoutProvinceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutDistrictsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutProvinceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUpdateManyWithWhereWithoutProvinceInput {
    where: InstanceType<typeof CityScalarWhereInput>;
    data: InstanceType<typeof CityUpdateManyMutationInput>;
}
export declare class CityUpdateManyWithoutProvinceNestedInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    upsert?: Array<CityUpsertWithWhereUniqueWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    set?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    update?: Array<CityUpdateWithWhereUniqueWithoutProvinceInput>;
    updateMany?: Array<CityUpdateManyWithWhereWithoutProvinceInput>;
    deleteMany?: Array<CityScalarWhereInput>;
}
export declare class CityUpdateOneRequiredWithoutDistrictsNestedInput {
    create?: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutDistrictsInput>;
    upsert?: InstanceType<typeof CityUpsertWithoutDistrictsInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof CityUpdateToOneWithWhereWithoutDistrictsInput>;
}
export declare class CityUpdateToOneWithWhereWithoutDistrictsInput {
    where?: InstanceType<typeof CityWhereInput>;
    data: InstanceType<typeof CityUpdateWithoutDistrictsInput>;
}
export declare class CityUpdateWithWhereUniqueWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CityUpdateWithoutProvinceInput>;
}
export declare class CityUpdateWithoutDistrictsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    province?: InstanceType<typeof ProvinceUpdateOneRequiredWithoutCitiesNestedInput>;
}
export declare class CityUpdateWithoutProvinceInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    province?: InstanceType<typeof ProvinceUpdateOneRequiredWithoutCitiesNestedInput>;
    districts?: InstanceType<typeof DistrictUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpsertWithWhereUniqueWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CityUpdateWithoutProvinceInput>;
    create: InstanceType<typeof CityCreateWithoutProvinceInput>;
}
export declare class CityUpsertWithoutDistrictsInput {
    update: InstanceType<typeof CityUpdateWithoutDistrictsInput>;
    create: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class CityWhereUniqueInput {
    id?: number;
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
    province?: InstanceType<typeof ProvinceRelationFilter>;
    districts?: InstanceType<typeof DistrictListRelationFilter>;
}
export declare class CityWhereInput {
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
    province?: InstanceType<typeof ProvinceRelationFilter>;
    districts?: InstanceType<typeof DistrictListRelationFilter>;
}
export declare class City {
    id: number;
    name: string;
    provinceId: number;
    province?: InstanceType<typeof Province>;
    districts?: Array<District>;
    _count?: InstanceType<typeof CityCount>;
}
export declare class CreateManyCityArgs {
    data: Array<CityCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCityArgs {
    data: InstanceType<typeof CityCreateInput>;
}
export declare class DeleteManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class DeleteOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindFirstCityOrThrowArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindFirstCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindUniqueCityOrThrowArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCityArgs {
    data: InstanceType<typeof CityUpdateManyMutationInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class UpdateOneCityArgs {
    data: InstanceType<typeof CityUpdateInput>;
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateInput>;
    update: InstanceType<typeof CityUpdateInput>;
}
export declare class AggregateDistrict {
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class CreateManyDistrictArgs {
    data: Array<DistrictCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDistrictArgs {
    data: InstanceType<typeof DistrictCreateInput>;
}
export declare class DeleteManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DeleteOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictAggregateArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictAvgAggregateInput {
    id?: true;
    cityId?: true;
}
export declare class DistrictAvgAggregate {
    id?: number;
    cityId?: number;
}
export declare class DistrictAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictCountAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
    _all?: true;
}
export declare class DistrictCountAggregate {
    id: number;
    name: number;
    cityId: number;
    _all: number;
}
export declare class DistrictCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictCount {
    subdistricts?: number;
}
export declare class DistrictCreateManyCityInputEnvelope {
    data: Array<DistrictCreateManyCityInput>;
    skipDuplicates?: boolean;
}
export declare class DistrictCreateManyCityInput {
    id?: number;
    name: string;
}
export declare class DistrictCreateManyInput {
    id?: number;
    name: string;
    cityId: number;
}
export declare class DistrictCreateNestedManyWithoutCityInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
}
export declare class DistrictCreateNestedOneWithoutSubdistrictsInput {
    create?: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutSubdistrictsInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictCreateOrConnectWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateWithoutCityInput>;
}
export declare class DistrictCreateOrConnectWithoutSubdistrictsInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
}
export declare class DistrictCreateWithoutCityInput {
    name: string;
    subdistricts?: InstanceType<typeof SubdistrictCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictCreateWithoutSubdistrictsInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutDistrictsInput>;
}
export declare class DistrictCreateInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutDistrictsInput>;
    subdistricts?: InstanceType<typeof SubdistrictCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictGroupByArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithAggregationInput>;
    by: Array<keyof typeof DistrictScalarFieldEnum>;
    having?: InstanceType<typeof DistrictScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictGroupBy {
    id: number;
    name: string;
    cityId: number;
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class DistrictListRelationFilter {
    every?: InstanceType<typeof DistrictWhereInput>;
    some?: InstanceType<typeof DistrictWhereInput>;
    none?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictMaxAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
}
export declare class DistrictMaxAggregate {
    id?: number;
    name?: string;
    cityId?: number;
}
export declare class DistrictMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictMinAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
}
export declare class DistrictMinAggregate {
    id?: number;
    name?: string;
    cityId?: number;
}
export declare class DistrictMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DistrictOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DistrictCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DistrictMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumOrderByAggregateInput>;
}
export declare class DistrictOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    subdistricts?: InstanceType<typeof SubdistrictOrderByRelationAggregateInput>;
}
export declare class DistrictRelationFilter {
    is?: InstanceType<typeof DistrictWhereInput>;
    isNot?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictScalarWhereWithAggregatesInput {
    AND?: Array<DistrictScalarWhereWithAggregatesInput>;
    OR?: Array<DistrictScalarWhereWithAggregatesInput>;
    NOT?: Array<DistrictScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class DistrictScalarWhereInput {
    AND?: Array<DistrictScalarWhereInput>;
    OR?: Array<DistrictScalarWhereInput>;
    NOT?: Array<DistrictScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
}
export declare class DistrictSumAggregateInput {
    id?: true;
    cityId?: true;
}
export declare class DistrictSumAggregate {
    id?: number;
    cityId?: number;
}
export declare class DistrictSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictUncheckedCreateNestedManyWithoutCityInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
}
export declare class DistrictUncheckedCreateWithoutCityInput {
    id?: number;
    name: string;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictUncheckedCreateWithoutSubdistrictsInput {
    id?: number;
    name: string;
    cityId: number;
}
export declare class DistrictUncheckedCreateInput {
    id?: number;
    name: string;
    cityId: number;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictUncheckedUpdateManyWithoutCityNestedInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    upsert?: Array<DistrictUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    update?: Array<DistrictUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<DistrictUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<DistrictScalarWhereInput>;
}
export declare class DistrictUncheckedUpdateManyWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUncheckedUpdateWithoutSubdistrictsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUpdateManyWithWhereWithoutCityInput {
    where: InstanceType<typeof DistrictScalarWhereInput>;
    data: InstanceType<typeof DistrictUpdateManyMutationInput>;
}
export declare class DistrictUpdateManyWithoutCityNestedInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    upsert?: Array<DistrictUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    update?: Array<DistrictUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<DistrictUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<DistrictScalarWhereInput>;
}
export declare class DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput {
    create?: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutSubdistrictsInput>;
    upsert?: InstanceType<typeof DistrictUpsertWithoutSubdistrictsInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DistrictUpdateToOneWithWhereWithoutSubdistrictsInput>;
}
export declare class DistrictUpdateToOneWithWhereWithoutSubdistrictsInput {
    where?: InstanceType<typeof DistrictWhereInput>;
    data: InstanceType<typeof DistrictUpdateWithoutSubdistrictsInput>;
}
export declare class DistrictUpdateWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DistrictUpdateWithoutCityInput>;
}
export declare class DistrictUpdateWithoutCityInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpdateWithoutSubdistrictsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutDistrictsNestedInput>;
}
export declare class DistrictUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutDistrictsNestedInput>;
    subdistricts?: InstanceType<typeof SubdistrictUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpsertWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DistrictUpdateWithoutCityInput>;
    create: InstanceType<typeof DistrictCreateWithoutCityInput>;
}
export declare class DistrictUpsertWithoutSubdistrictsInput {
    update: InstanceType<typeof DistrictUpdateWithoutSubdistrictsInput>;
    create: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictWhereUniqueInput {
    id?: number;
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    subdistricts?: InstanceType<typeof SubdistrictListRelationFilter>;
}
export declare class DistrictWhereInput {
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    subdistricts?: InstanceType<typeof SubdistrictListRelationFilter>;
}
export declare class District {
    id: number;
    name: string;
    cityId: number;
    city?: InstanceType<typeof City>;
    subdistricts?: Array<Subdistrict>;
    _count?: InstanceType<typeof DistrictCount>;
}
export declare class FindFirstDistrictOrThrowArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindFirstDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindUniqueDistrictOrThrowArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDistrictArgs {
    data: InstanceType<typeof DistrictUpdateManyMutationInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class UpdateOneDistrictArgs {
    data: InstanceType<typeof DistrictUpdateInput>;
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateInput>;
    update: InstanceType<typeof DistrictUpdateInput>;
}
export declare class AggregateFaq {
    _count?: InstanceType<typeof FaqCountAggregate>;
    _avg?: InstanceType<typeof FaqAvgAggregate>;
    _sum?: InstanceType<typeof FaqSumAggregate>;
    _min?: InstanceType<typeof FaqMinAggregate>;
    _max?: InstanceType<typeof FaqMaxAggregate>;
}
export declare class CreateManyFaqArgs {
    data: Array<FaqCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneFaqArgs {
    data: InstanceType<typeof FaqCreateInput>;
}
export declare class DeleteManyFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
}
export declare class DeleteOneFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class FaqAggregateArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FaqCountAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgAggregateInput>;
    _sum?: InstanceType<typeof FaqSumAggregateInput>;
    _min?: InstanceType<typeof FaqMinAggregateInput>;
    _max?: InstanceType<typeof FaqMaxAggregateInput>;
}
export declare class FaqAvgAggregateInput {
    id?: true;
}
export declare class FaqAvgAggregate {
    id?: number;
}
export declare class FaqAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class FaqCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    type?: true;
    _all?: true;
}
export declare class FaqCountAggregate {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    type: number;
    _all: number;
}
export declare class FaqCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class FaqCreateManyInput {
    id?: number;
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof FaqType;
}
export declare class FaqCreateInput {
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof FaqType;
}
export declare class FaqGroupByArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithAggregationInput>;
    by: Array<keyof typeof FaqScalarFieldEnum>;
    having?: InstanceType<typeof FaqScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FaqCountAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgAggregateInput>;
    _sum?: InstanceType<typeof FaqSumAggregateInput>;
    _min?: InstanceType<typeof FaqMinAggregateInput>;
    _max?: InstanceType<typeof FaqMaxAggregateInput>;
}
export declare class FaqGroupBy {
    id: number;
    name: string;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    type: keyof typeof FaqType;
    _count?: InstanceType<typeof FaqCountAggregate>;
    _avg?: InstanceType<typeof FaqAvgAggregate>;
    _sum?: InstanceType<typeof FaqSumAggregate>;
    _min?: InstanceType<typeof FaqMinAggregate>;
    _max?: InstanceType<typeof FaqMaxAggregate>;
}
export declare class FaqMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    type?: true;
}
export declare class FaqMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof FaqType;
}
export declare class FaqMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class FaqMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    type?: true;
}
export declare class FaqMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type?: keyof typeof FaqType;
}
export declare class FaqMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class FaqOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: InstanceType<typeof FaqCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof FaqAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof FaqMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof FaqMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof FaqSumOrderByAggregateInput>;
}
export declare class FaqOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class FaqScalarWhereWithAggregatesInput {
    AND?: Array<FaqScalarWhereWithAggregatesInput>;
    OR?: Array<FaqScalarWhereWithAggregatesInput>;
    NOT?: Array<FaqScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    type?: InstanceType<typeof EnumFaqTypeWithAggregatesFilter>;
}
export declare class FaqSumAggregateInput {
    id?: true;
}
export declare class FaqSumAggregate {
    id?: number;
}
export declare class FaqSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class FaqUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof FaqType;
}
export declare class FaqUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumFaqTypeFieldUpdateOperationsInput>;
}
export declare class FaqUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumFaqTypeFieldUpdateOperationsInput>;
}
export declare class FaqUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumFaqTypeFieldUpdateOperationsInput>;
}
export declare class FaqUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumFaqTypeFieldUpdateOperationsInput>;
}
export declare class FaqWhereUniqueInput {
    id?: number;
    AND?: Array<FaqWhereInput>;
    OR?: Array<FaqWhereInput>;
    NOT?: Array<FaqWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    type?: InstanceType<typeof EnumFaqTypeFilter>;
}
export declare class FaqWhereInput {
    AND?: Array<FaqWhereInput>;
    OR?: Array<FaqWhereInput>;
    NOT?: Array<FaqWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    type?: InstanceType<typeof EnumFaqTypeFilter>;
}
export declare class Faq {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    type: keyof typeof FaqType;
}
export declare class FindFirstFaqOrThrowArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindFirstFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindManyFaqArgs {
    where?: InstanceType<typeof FaqWhereInput>;
    orderBy?: Array<FaqOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
export declare class FindUniqueFaqOrThrowArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class FindUniqueFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class UpdateManyFaqArgs {
    data: InstanceType<typeof FaqUpdateManyMutationInput>;
    where?: InstanceType<typeof FaqWhereInput>;
}
export declare class UpdateOneFaqArgs {
    data: InstanceType<typeof FaqUpdateInput>;
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
export declare class UpsertOneFaqArgs {
    where: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
    create: InstanceType<typeof FaqCreateInput>;
    update: InstanceType<typeof FaqUpdateInput>;
}
export declare class AggregateFile {
    _count?: InstanceType<typeof FileCountAggregate>;
    _avg?: InstanceType<typeof FileAvgAggregate>;
    _sum?: InstanceType<typeof FileSumAggregate>;
    _min?: InstanceType<typeof FileMinAggregate>;
    _max?: InstanceType<typeof FileMaxAggregate>;
}
export declare class CreateManyFileArgs {
    data: Array<FileCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneFileArgs {
    data: InstanceType<typeof FileCreateInput>;
}
export declare class DeleteManyFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
}
export declare class DeleteOneFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FileAggregateArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FileCountAggregateInput>;
    _avg?: InstanceType<typeof FileAvgAggregateInput>;
    _sum?: InstanceType<typeof FileSumAggregateInput>;
    _min?: InstanceType<typeof FileMinAggregateInput>;
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}
export declare class FileAvgAggregateInput {
    id?: true;
    filesize?: true;
}
export declare class FileAvgAggregate {
    id?: number;
    filesize?: number;
}
export declare class FileAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
}
export declare class FileCountAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class FileCountAggregate {
    id: number;
    fileType: number;
    filesize: number;
    name: number;
    description: number;
    url: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class FileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileCreateManyCreatedByInputEnvelope {
    data: Array<FileCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class FileCreateManyCreatedByInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateManyInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateNestedManyWithoutCreatedByInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class FileCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof FileCreateWithoutCreatedByInput>;
}
export declare class FileCreateWithoutCreatedByInput {
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileCreateInput {
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutFilesCreatedInput>;
}
export declare class FileGroupByArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithAggregationInput>;
    by: Array<keyof typeof FileScalarFieldEnum>;
    having?: InstanceType<typeof FileScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof FileCountAggregateInput>;
    _avg?: InstanceType<typeof FileAvgAggregateInput>;
    _sum?: InstanceType<typeof FileSumAggregateInput>;
    _min?: InstanceType<typeof FileMinAggregateInput>;
    _max?: InstanceType<typeof FileMaxAggregateInput>;
}
export declare class FileGroupBy {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof FileCountAggregate>;
    _avg?: InstanceType<typeof FileAvgAggregate>;
    _sum?: InstanceType<typeof FileSumAggregate>;
    _min?: InstanceType<typeof FileMinAggregate>;
    _max?: InstanceType<typeof FileMaxAggregate>;
}
export declare class FileListRelationFilter {
    every?: InstanceType<typeof FileWhereInput>;
    some?: InstanceType<typeof FileWhereInput>;
    none?: InstanceType<typeof FileWhereInput>;
}
export declare class FileMaxAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FileMaxAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    name?: string;
    description?: string;
    url?: string;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileMinAggregateInput {
    id?: true;
    fileType?: true;
    filesize?: true;
    name?: true;
    description?: true;
    url?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class FileMinAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    filesize?: number;
    name?: string;
    description?: string;
    url?: string;
    createdById?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class FileOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class FileOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof FileCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof FileAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof FileMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof FileMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof FileSumOrderByAggregateInput>;
}
export declare class FileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class FileScalarWhereWithAggregatesInput {
    AND?: Array<FileScalarWhereWithAggregatesInput>;
    OR?: Array<FileScalarWhereWithAggregatesInput>;
    NOT?: Array<FileScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    fileType?: InstanceType<typeof EnumFileTypeWithAggregatesFilter>;
    filesize?: InstanceType<typeof FloatWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class FileScalarWhereInput {
    AND?: Array<FileScalarWhereInput>;
    OR?: Array<FileScalarWhereInput>;
    NOT?: Array<FileScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class FileSumAggregateInput {
    id?: true;
    filesize?: true;
}
export declare class FileSumAggregate {
    id?: number;
    filesize?: number;
}
export declare class FileSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    filesize?: keyof typeof SortOrder;
}
export declare class FileUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
}
export declare class FileUncheckedCreateWithoutCreatedByInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileUncheckedCreateInput {
    id?: number;
    fileType: keyof typeof FileType;
    filesize?: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class FileUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<FileUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<FileUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<FileUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<FileScalarWhereInput>;
}
export declare class FileUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateManyMutationInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof FileScalarWhereInput>;
    data: InstanceType<typeof FileUpdateManyMutationInput>;
}
export declare class FileUpdateManyWithoutCreatedByNestedInput {
    create?: Array<FileCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<FileCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<FileUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof FileCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>>;
    update?: Array<FileUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<FileUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<FileScalarWhereInput>;
}
export declare class FileUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    data: InstanceType<typeof FileUpdateWithoutCreatedByInput>;
}
export declare class FileUpdateWithoutCreatedByInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class FileUpdateInput {
    fileType?: InstanceType<typeof EnumFileTypeFieldUpdateOperationsInput>;
    filesize?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutFilesCreatedNestedInput>;
}
export declare class FileUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    update: InstanceType<typeof FileUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof FileCreateWithoutCreatedByInput>;
}
export declare class FileWhereUniqueInput {
    id?: number;
    createdById?: string;
    AND?: Array<FileWhereInput>;
    OR?: Array<FileWhereInput>;
    NOT?: Array<FileWhereInput>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class FileWhereInput {
    AND?: Array<FileWhereInput>;
    OR?: Array<FileWhereInput>;
    NOT?: Array<FileWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeFilter>;
    filesize?: InstanceType<typeof FloatFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    url?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class File {
    id: number;
    fileType: keyof typeof FileType;
    filesize: number;
    name: string;
    description: string;
    url: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: InstanceType<typeof User>;
}
export declare class FindFirstFileOrThrowArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindFirstFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindManyFileArgs {
    where?: InstanceType<typeof FileWhereInput>;
    orderBy?: Array<FileOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
export declare class FindUniqueFileOrThrowArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class FindUniqueFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class UpdateManyFileArgs {
    data: InstanceType<typeof FileUpdateManyMutationInput>;
    where?: InstanceType<typeof FileWhereInput>;
}
export declare class UpdateOneFileArgs {
    data: InstanceType<typeof FileUpdateInput>;
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
}
export declare class UpsertOneFileArgs {
    where: Prisma.AtLeast<FileWhereUniqueInput, 'id' | 'createdById'>;
    create: InstanceType<typeof FileCreateInput>;
    update: InstanceType<typeof FileUpdateInput>;
}
export declare class AggregateHotel {
    _count?: InstanceType<typeof HotelCountAggregate>;
    _avg?: InstanceType<typeof HotelAvgAggregate>;
    _sum?: InstanceType<typeof HotelSumAggregate>;
    _min?: InstanceType<typeof HotelMinAggregate>;
    _max?: InstanceType<typeof HotelMaxAggregate>;
}
export declare class CreateManyHotelArgs {
    data: Array<HotelCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneHotelArgs {
    data: InstanceType<typeof HotelCreateInput>;
}
export declare class DeleteManyHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class DeleteOneHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindFirstHotelOrThrowArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindFirstHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindManyHotelArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
export declare class FindUniqueHotelOrThrowArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindUniqueHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelAggregateArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof HotelCountAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgAggregateInput>;
    _sum?: InstanceType<typeof HotelSumAggregateInput>;
    _min?: InstanceType<typeof HotelMinAggregateInput>;
    _max?: InstanceType<typeof HotelMaxAggregateInput>;
}
export declare class HotelAvgAggregateInput {
    id?: true;
    addressId?: true;
    rating?: true;
    quota?: true;
    version?: true;
}
export declare class HotelAvgAggregate {
    id?: number;
    addressId?: number;
    rating?: number;
    quota?: number;
    version?: number;
}
export declare class HotelAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    version?: keyof typeof SortOrder;
}
export declare class HotelCountAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    version?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class HotelCountAggregate {
    id: number;
    name: number;
    addressId: number;
    description: number;
    rating: number;
    startDate: number;
    quota: number;
    createdById: number;
    createdAt: number;
    version: number;
    updatedAt: number;
    _all: number;
}
export declare class HotelCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    version?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelCount {
    images?: number;
    checkIns?: number;
}
export declare class HotelCreateManyCreatedByInputEnvelope {
    data: Array<HotelCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class HotelCreateManyCreatedByInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
}
export declare class HotelCreateManyInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
}
export declare class HotelCreateNestedManyWithoutCreatedByInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
}
export declare class HotelCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateNestedOneWithoutCheckInsInput {
    create?: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof HotelCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutAddressInput>;
}
export declare class HotelCreateOrConnectWithoutCheckInsInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
}
export declare class HotelCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutCreatedByInput>;
}
export declare class HotelCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateWithoutImagesInput>;
}
export declare class HotelCreateWithoutAddressInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateWithoutCheckInsInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateWithoutCreatedByInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
}
export declare class HotelCreateWithoutImagesInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelCreateInput {
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutHotelInput>;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutHotelInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutHotelsCreatedInput>;
}
export declare class HotelGroupByArgs {
    where?: InstanceType<typeof HotelWhereInput>;
    orderBy?: Array<HotelOrderByWithAggregationInput>;
    by: Array<keyof typeof HotelScalarFieldEnum>;
    having?: InstanceType<typeof HotelScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof HotelCountAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgAggregateInput>;
    _sum?: InstanceType<typeof HotelSumAggregateInput>;
    _min?: InstanceType<typeof HotelMinAggregateInput>;
    _max?: InstanceType<typeof HotelMaxAggregateInput>;
}
export declare class HotelGroupBy {
    id: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt: Date | string;
    version?: number;
    updatedAt: Date | string;
    _count?: InstanceType<typeof HotelCountAggregate>;
    _avg?: InstanceType<typeof HotelAvgAggregate>;
    _sum?: InstanceType<typeof HotelSumAggregate>;
    _min?: InstanceType<typeof HotelMinAggregate>;
    _max?: InstanceType<typeof HotelMaxAggregate>;
}
export declare class HotelListRelationFilter {
    every?: InstanceType<typeof HotelWhereInput>;
    some?: InstanceType<typeof HotelWhereInput>;
    none?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelMaxAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    version?: true;
    updatedAt?: true;
}
export declare class HotelMaxAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    description?: string;
    rating?: number;
    startDate?: Date | string;
    quota?: number;
    createdById?: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
}
export declare class HotelMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    version?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelMinAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    description?: true;
    rating?: true;
    startDate?: true;
    quota?: true;
    createdById?: true;
    createdAt?: true;
    version?: true;
    updatedAt?: true;
}
export declare class HotelMinAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    description?: string;
    rating?: number;
    startDate?: Date | string;
    quota?: number;
    createdById?: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
}
export declare class HotelMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    version?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class HotelNullableRelationFilter {
    is?: InstanceType<typeof HotelWhereInput>;
    isNot?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class HotelOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    version?: InstanceType<typeof SortOrderInput>;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof HotelCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof HotelAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof HotelMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof HotelMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof HotelSumOrderByAggregateInput>;
}
export declare class HotelOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    version?: InstanceType<typeof SortOrderInput>;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    checkIns?: InstanceType<typeof CheckInOrderByRelationAggregateInput>;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class HotelRelationFilter {
    is?: InstanceType<typeof HotelWhereInput>;
    isNot?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelScalarWhereWithAggregatesInput {
    AND?: Array<HotelScalarWhereWithAggregatesInput>;
    OR?: Array<HotelScalarWhereWithAggregatesInput>;
    NOT?: Array<HotelScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    rating?: InstanceType<typeof FloatWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    quota?: InstanceType<typeof IntWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    version?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class HotelScalarWhereInput {
    AND?: Array<HotelScalarWhereInput>;
    OR?: Array<HotelScalarWhereInput>;
    NOT?: Array<HotelScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    version?: InstanceType<typeof IntNullableFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class HotelSumAggregateInput {
    id?: true;
    addressId?: true;
    rating?: true;
    quota?: true;
    version?: true;
}
export declare class HotelSumAggregate {
    id?: number;
    addressId?: number;
    rating?: number;
    quota?: number;
    version?: number;
}
export declare class HotelSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    quota?: keyof typeof SortOrder;
    version?: keyof typeof SortOrder;
}
export declare class HotelUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
}
export declare class HotelUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class HotelUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateWithoutCheckInsInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
}
export declare class HotelUncheckedCreateWithoutCreatedByInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedCreateInput {
    id?: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date | string;
    quota: number;
    createdById: string;
    createdAt?: Date | string;
    version?: number;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutHotelImageInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutHotelInput>;
}
export declare class HotelUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<HotelUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    disconnect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    delete?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    update?: Array<HotelUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<HotelUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<HotelScalarWhereInput>;
}
export declare class HotelUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class HotelUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class HotelUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof HotelScalarWhereInput>;
    data: InstanceType<typeof HotelUpdateManyMutationInput>;
}
export declare class HotelUpdateManyWithoutCreatedByNestedInput {
    create?: Array<HotelCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<HotelUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof HotelCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    disconnect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    delete?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
    update?: Array<HotelUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<HotelUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<HotelScalarWhereInput>;
}
export declare class HotelUpdateOneRequiredWithoutCheckInsNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutCheckInsInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutCheckInsInput>;
}
export declare class HotelUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class HotelUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof HotelCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof HotelCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof HotelUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof HotelWhereInput>;
    delete?: InstanceType<typeof HotelWhereInput>;
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof HotelUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutAddressInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutCheckInsInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutCheckInsInput>;
}
export declare class HotelUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof HotelWhereInput>;
    data: InstanceType<typeof HotelUpdateWithoutImagesInput>;
}
export declare class HotelUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    data: InstanceType<typeof HotelUpdateWithoutCreatedByInput>;
}
export declare class HotelUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateWithoutCheckInsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateWithoutCreatedByInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
}
export declare class HotelUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rating?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    quota?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    version?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutHotelNestedInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutHotelImageNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutHotelNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutHotelsCreatedNestedInput>;
}
export declare class HotelUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    update: InstanceType<typeof HotelUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof HotelCreateWithoutCreatedByInput>;
}
export declare class HotelUpsertWithoutAddressInput {
    update: InstanceType<typeof HotelUpdateWithoutAddressInput>;
    create: InstanceType<typeof HotelCreateWithoutAddressInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelUpsertWithoutCheckInsInput {
    update: InstanceType<typeof HotelUpdateWithoutCheckInsInput>;
    create: InstanceType<typeof HotelCreateWithoutCheckInsInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelUpsertWithoutImagesInput {
    update: InstanceType<typeof HotelUpdateWithoutImagesInput>;
    create: InstanceType<typeof HotelCreateWithoutImagesInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class HotelWhereUniqueInput {
    id?: number;
    addressId?: number;
    AND?: Array<HotelWhereInput>;
    OR?: Array<HotelWhereInput>;
    NOT?: Array<HotelWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    version?: InstanceType<typeof IntNullableFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class HotelWhereInput {
    AND?: Array<HotelWhereInput>;
    OR?: Array<HotelWhereInput>;
    NOT?: Array<HotelWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringFilter>;
    rating?: InstanceType<typeof FloatFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    quota?: InstanceType<typeof IntFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    version?: InstanceType<typeof IntNullableFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class Hotel {
    id: number;
    name: string;
    addressId: number;
    description: string;
    rating: number;
    startDate: Date;
    quota: number;
    createdById: string;
    createdAt: Date;
    version: number | null;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    images?: Array<Images>;
    checkIns?: Array<CheckIn>;
    createdBy?: InstanceType<typeof User>;
    _count?: InstanceType<typeof HotelCount>;
}
export declare class UpdateManyHotelArgs {
    data: InstanceType<typeof HotelUpdateManyMutationInput>;
    where?: InstanceType<typeof HotelWhereInput>;
}
export declare class UpdateOneHotelArgs {
    data: InstanceType<typeof HotelUpdateInput>;
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class UpsertOneHotelArgs {
    where: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof HotelCreateInput>;
    update: InstanceType<typeof HotelUpdateInput>;
}
export declare class AggregateImages {
    _count?: InstanceType<typeof ImagesCountAggregate>;
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    _min?: InstanceType<typeof ImagesMinAggregate>;
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}
export declare class CreateManyImagesArgs {
    data: Array<ImagesCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneImagesArgs {
    data: InstanceType<typeof ImagesCreateInput>;
}
export declare class DeleteManyImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
}
export declare class DeleteOneImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class FindFirstImagesOrThrowArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindFirstImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindManyImagesArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
export declare class FindUniqueImagesOrThrowArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class FindUniqueImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class ImagesAggregateArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}
export declare class ImagesAvgAggregateInput {
    id?: true;
    fileSize?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
}
export declare class ImagesAvgAggregate {
    id?: number;
    fileSize?: number;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
}
export declare class ImagesAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileSize?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
}
export declare class ImagesCountAggregateInput {
    id?: true;
    fileType?: true;
    fileSize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
    _all?: true;
}
export declare class ImagesCountAggregate {
    id: number;
    fileType: number;
    fileSize: number;
    url: number;
    hotelImageId: number;
    programImageId: number;
    rewardImageId: number;
    projectImageId: number;
    createdAt: number;
    _all: number;
}
export declare class ImagesCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    fileSize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesCreateManyHotelImageInputEnvelope {
    data: Array<ImagesCreateManyHotelImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyHotelImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyProgramImageInputEnvelope {
    data: Array<ImagesCreateManyProgramImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyProgramImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyProjectImageInputEnvelope {
    data: Array<ImagesCreateManyProjectImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyProjectImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyRewardImageInputEnvelope {
    data: Array<ImagesCreateManyRewardImageInput>;
    skipDuplicates?: boolean;
}
export declare class ImagesCreateManyRewardImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateManyInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesCreateNestedManyWithoutHotelImageInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutProgramImageInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutProjectImageInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateNestedManyWithoutRewardImageInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesCreateOrConnectWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutHotelImageInput>;
}
export declare class ImagesCreateOrConnectWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutProgramImageInput>;
}
export declare class ImagesCreateOrConnectWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutProjectImageInput>;
}
export declare class ImagesCreateOrConnectWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateWithoutRewardImageInput>;
}
export declare class ImagesCreateWithoutHotelImageInput {
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    createdAt?: Date | string;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutProgramImageInput {
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutProjectImageInput {
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateWithoutRewardImageInput {
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesCreateInput {
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    createdAt?: Date | string;
    hotelImage?: InstanceType<typeof HotelCreateNestedOneWithoutImagesInput>;
    programImage?: InstanceType<typeof ProgramCreateNestedOneWithoutImagesInput>;
    rewardImage?: InstanceType<typeof RewardCreateNestedOneWithoutImagesInput>;
    projectImage?: InstanceType<typeof ProjectCreateNestedOneWithoutImagesInput>;
}
export declare class ImagesGroupByArgs {
    where?: InstanceType<typeof ImagesWhereInput>;
    orderBy?: Array<ImagesOrderByWithAggregationInput>;
    by: Array<keyof typeof ImagesScalarFieldEnum>;
    having?: InstanceType<typeof ImagesScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}
export declare class ImagesGroupBy {
    id: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof ImagesCountAggregate>;
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    _min?: InstanceType<typeof ImagesMinAggregate>;
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}
export declare class ImagesListRelationFilter {
    every?: InstanceType<typeof ImagesWhereInput>;
    some?: InstanceType<typeof ImagesWhereInput>;
    none?: InstanceType<typeof ImagesWhereInput>;
}
export declare class ImagesMaxAggregateInput {
    id?: true;
    fileType?: true;
    fileSize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
}
export declare class ImagesMaxAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url?: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    fileSize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesMinAggregateInput {
    id?: true;
    fileType?: true;
    fileSize?: true;
    url?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
    createdAt?: true;
}
export declare class ImagesMinAggregate {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url?: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileType?: keyof typeof SortOrder;
    fileSize?: keyof typeof SortOrder;
    url?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class ImagesOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ImagesOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fileType?: InstanceType<typeof SortOrderInput>;
    fileSize?: InstanceType<typeof SortOrderInput>;
    url?: keyof typeof SortOrder;
    hotelImageId?: InstanceType<typeof SortOrderInput>;
    programImageId?: InstanceType<typeof SortOrderInput>;
    rewardImageId?: InstanceType<typeof SortOrderInput>;
    projectImageId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ImagesCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ImagesAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ImagesMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ImagesMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ImagesSumOrderByAggregateInput>;
}
export declare class ImagesOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fileType?: InstanceType<typeof SortOrderInput>;
    fileSize?: InstanceType<typeof SortOrderInput>;
    url?: keyof typeof SortOrder;
    hotelImageId?: InstanceType<typeof SortOrderInput>;
    programImageId?: InstanceType<typeof SortOrderInput>;
    rewardImageId?: InstanceType<typeof SortOrderInput>;
    projectImageId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    hotelImage?: InstanceType<typeof HotelOrderByWithRelationInput>;
    programImage?: InstanceType<typeof ProgramOrderByWithRelationInput>;
    rewardImage?: InstanceType<typeof RewardOrderByWithRelationInput>;
    projectImage?: InstanceType<typeof ProjectOrderByWithRelationInput>;
}
export declare class ImagesScalarWhereWithAggregatesInput {
    AND?: Array<ImagesScalarWhereWithAggregatesInput>;
    OR?: Array<ImagesScalarWhereWithAggregatesInput>;
    NOT?: Array<ImagesScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    fileType?: InstanceType<typeof EnumFileTypeNullableWithAggregatesFilter>;
    fileSize?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    hotelImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    programImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    rewardImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    projectImageId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ImagesScalarWhereInput {
    AND?: Array<ImagesScalarWhereInput>;
    OR?: Array<ImagesScalarWhereInput>;
    NOT?: Array<ImagesScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeNullableFilter>;
    fileSize?: InstanceType<typeof FloatNullableFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ImagesSumAggregateInput {
    id?: true;
    fileSize?: true;
    hotelImageId?: true;
    programImageId?: true;
    rewardImageId?: true;
    projectImageId?: true;
}
export declare class ImagesSumAggregate {
    id?: number;
    fileSize?: number;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
}
export declare class ImagesSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileSize?: keyof typeof SortOrder;
    hotelImageId?: keyof typeof SortOrder;
    programImageId?: keyof typeof SortOrder;
    rewardImageId?: keyof typeof SortOrder;
    projectImageId?: keyof typeof SortOrder;
}
export declare class ImagesUncheckedCreateNestedManyWithoutHotelImageInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutProgramImageInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutProjectImageInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateNestedManyWithoutRewardImageInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
export declare class ImagesUncheckedCreateWithoutHotelImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutProgramImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutProjectImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateWithoutRewardImageInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedCreateInput {
    id?: number;
    fileType?: keyof typeof FileType;
    fileSize?: number;
    url: string;
    hotelImageId?: number;
    programImageId?: number;
    rewardImageId?: number;
    projectImageId?: number;
    createdAt?: Date | string;
}
export declare class ImagesUncheckedUpdateManyWithoutHotelImageNestedInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutHotelImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutHotelImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutHotelImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProgramImageNestedInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProgramImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProgramImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProgramImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProjectImageNestedInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProjectImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProjectImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutProjectImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutRewardImageNestedInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutRewardImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutRewardImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUncheckedUpdateManyWithoutRewardImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutHotelImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutProgramImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutProjectImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateWithoutRewardImageInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hotelImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rewardImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    projectImageId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUpdateManyMutationInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutHotelImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutProgramImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutProjectImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithWhereWithoutRewardImageInput {
    where: InstanceType<typeof ImagesScalarWhereInput>;
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
}
export declare class ImagesUpdateManyWithoutHotelImageNestedInput {
    create?: Array<ImagesCreateWithoutHotelImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutHotelImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutHotelImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyHotelImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutHotelImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutHotelImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutProgramImageNestedInput {
    create?: Array<ImagesCreateWithoutProgramImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProgramImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProgramImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProgramImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProgramImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProgramImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutProjectImageNestedInput {
    create?: Array<ImagesCreateWithoutProjectImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutProjectImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutProjectImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyProjectImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutProjectImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutProjectImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateManyWithoutRewardImageNestedInput {
    create?: Array<ImagesCreateWithoutRewardImageInput>;
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutRewardImageInput>;
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutRewardImageInput>;
    createMany?: InstanceType<typeof ImagesCreateManyRewardImageInputEnvelope>;
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
    update?: Array<ImagesUpdateWithWhereUniqueWithoutRewardImageInput>;
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutRewardImageInput>;
    deleteMany?: Array<ImagesScalarWhereInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutHotelImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutProgramImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutProjectImageInput>;
}
export declare class ImagesUpdateWithWhereUniqueWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ImagesUpdateWithoutRewardImageInput>;
}
export declare class ImagesUpdateWithoutHotelImageInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutProgramImageInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutProjectImageInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateWithoutRewardImageInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpdateInput {
    fileType?: InstanceType<typeof NullableEnumFileTypeFieldUpdateOperationsInput>;
    fileSize?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hotelImage?: InstanceType<typeof HotelUpdateOneWithoutImagesNestedInput>;
    programImage?: InstanceType<typeof ProgramUpdateOneWithoutImagesNestedInput>;
    rewardImage?: InstanceType<typeof RewardUpdateOneWithoutImagesNestedInput>;
    projectImage?: InstanceType<typeof ProjectUpdateOneWithoutImagesNestedInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutHotelImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutHotelImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutHotelImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutProgramImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutProgramImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutProgramImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutProjectImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutProjectImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutProjectImageInput>;
}
export declare class ImagesUpsertWithWhereUniqueWithoutRewardImageInput {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ImagesUpdateWithoutRewardImageInput>;
    create: InstanceType<typeof ImagesCreateWithoutRewardImageInput>;
}
export declare class ImagesWhereUniqueInput {
    id?: number;
    AND?: Array<ImagesWhereInput>;
    OR?: Array<ImagesWhereInput>;
    NOT?: Array<ImagesWhereInput>;
    fileType?: InstanceType<typeof EnumFileTypeNullableFilter>;
    fileSize?: InstanceType<typeof FloatNullableFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    hotelImage?: InstanceType<typeof HotelNullableRelationFilter>;
    programImage?: InstanceType<typeof ProgramNullableRelationFilter>;
    rewardImage?: InstanceType<typeof RewardNullableRelationFilter>;
    projectImage?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class ImagesWhereInput {
    AND?: Array<ImagesWhereInput>;
    OR?: Array<ImagesWhereInput>;
    NOT?: Array<ImagesWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fileType?: InstanceType<typeof EnumFileTypeNullableFilter>;
    fileSize?: InstanceType<typeof FloatNullableFilter>;
    url?: InstanceType<typeof StringFilter>;
    hotelImageId?: InstanceType<typeof IntNullableFilter>;
    programImageId?: InstanceType<typeof IntNullableFilter>;
    rewardImageId?: InstanceType<typeof IntNullableFilter>;
    projectImageId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    hotelImage?: InstanceType<typeof HotelNullableRelationFilter>;
    programImage?: InstanceType<typeof ProgramNullableRelationFilter>;
    rewardImage?: InstanceType<typeof RewardNullableRelationFilter>;
    projectImage?: InstanceType<typeof ProjectNullableRelationFilter>;
}
export declare class Images {
    id: number;
    fileType: keyof typeof FileType | null;
    fileSize: number | null;
    url: string;
    hotelImageId: number | null;
    programImageId: number | null;
    rewardImageId: number | null;
    projectImageId: number | null;
    createdAt: Date;
    hotelImage?: InstanceType<typeof Hotel> | null;
    programImage?: InstanceType<typeof Program> | null;
    rewardImage?: InstanceType<typeof Reward> | null;
    projectImage?: InstanceType<typeof Project> | null;
}
export declare class UpdateManyImagesArgs {
    data: InstanceType<typeof ImagesUpdateManyMutationInput>;
    where?: InstanceType<typeof ImagesWhereInput>;
}
export declare class UpdateOneImagesArgs {
    data: InstanceType<typeof ImagesUpdateInput>;
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
}
export declare class UpsertOneImagesArgs {
    where: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ImagesCreateInput>;
    update: InstanceType<typeof ImagesUpdateInput>;
}
export declare class AggregateInstallment {
    _count?: InstanceType<typeof InstallmentCountAggregate>;
    _avg?: InstanceType<typeof InstallmentAvgAggregate>;
    _sum?: InstanceType<typeof InstallmentSumAggregate>;
    _min?: InstanceType<typeof InstallmentMinAggregate>;
    _max?: InstanceType<typeof InstallmentMaxAggregate>;
}
export declare class CreateManyInstallmentArgs {
    data: Array<InstallmentCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneInstallmentArgs {
    data: InstanceType<typeof InstallmentCreateInput>;
}
export declare class DeleteManyInstallmentArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
}
export declare class DeleteOneInstallmentArgs {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
}
export declare class FindFirstInstallmentOrThrowArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
    orderBy?: Array<InstallmentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InstallmentScalarFieldEnum>;
}
export declare class FindFirstInstallmentArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
    orderBy?: Array<InstallmentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InstallmentScalarFieldEnum>;
}
export declare class FindManyInstallmentArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
    orderBy?: Array<InstallmentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InstallmentScalarFieldEnum>;
}
export declare class FindUniqueInstallmentOrThrowArgs {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
}
export declare class FindUniqueInstallmentArgs {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
}
export declare class InstallmentAggregateArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
    orderBy?: Array<InstallmentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InstallmentCountAggregateInput>;
    _avg?: InstanceType<typeof InstallmentAvgAggregateInput>;
    _sum?: InstanceType<typeof InstallmentSumAggregateInput>;
    _min?: InstanceType<typeof InstallmentMinAggregateInput>;
    _max?: InstanceType<typeof InstallmentMaxAggregateInput>;
}
export declare class InstallmentAvgAggregateInput {
    id?: true;
    number?: true;
    lateFee?: true;
    amount?: true;
    transactionId?: true;
    invoiceId?: true;
}
export declare class InstallmentAvgAggregate {
    id?: number;
    number?: number;
    lateFee?: number;
    amount?: number;
    transactionId?: number;
    invoiceId?: number;
}
export declare class InstallmentAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
}
export declare class InstallmentCountAggregateInput {
    id?: true;
    number?: true;
    lateFee?: true;
    amount?: true;
    dueDate?: true;
    status?: true;
    transactionId?: true;
    invoiceId?: true;
    _all?: true;
}
export declare class InstallmentCountAggregate {
    id: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: number;
    status: number;
    transactionId: number;
    invoiceId: number;
    _all: number;
}
export declare class InstallmentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
}
export declare class InstallmentCreateManyInvoiceInputEnvelope {
    data: Array<InstallmentCreateManyInvoiceInput>;
    skipDuplicates?: boolean;
}
export declare class InstallmentCreateManyInvoiceInput {
    id?: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
}
export declare class InstallmentCreateManyInput {
    id?: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId: number;
}
export declare class InstallmentCreateNestedManyWithoutInvoiceInput {
    create?: Array<InstallmentCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutInvoiceInput>;
    createMany?: InstanceType<typeof InstallmentCreateManyInvoiceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
}
export declare class InstallmentCreateNestedOneWithoutTransactionInput {
    create?: InstanceType<typeof InstallmentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof InstallmentCreateOrConnectWithoutTransactionInput>;
    connect?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
}
export declare class InstallmentCreateOrConnectWithoutInvoiceInput {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InstallmentCreateWithoutInvoiceInput>;
}
export declare class InstallmentCreateOrConnectWithoutTransactionInput {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InstallmentCreateWithoutTransactionInput>;
}
export declare class InstallmentCreateWithoutInvoiceInput {
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    transaction?: InstanceType<typeof TransactionCreateNestedOneWithoutInstallmentInput>;
}
export declare class InstallmentCreateWithoutTransactionInput {
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutInstallmentsInput>;
}
export declare class InstallmentCreateInput {
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    transaction?: InstanceType<typeof TransactionCreateNestedOneWithoutInstallmentInput>;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutInstallmentsInput>;
}
export declare class InstallmentGroupByArgs {
    where?: InstanceType<typeof InstallmentWhereInput>;
    orderBy?: Array<InstallmentOrderByWithAggregationInput>;
    by: Array<keyof typeof InstallmentScalarFieldEnum>;
    having?: InstanceType<typeof InstallmentScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InstallmentCountAggregateInput>;
    _avg?: InstanceType<typeof InstallmentAvgAggregateInput>;
    _sum?: InstanceType<typeof InstallmentSumAggregateInput>;
    _min?: InstanceType<typeof InstallmentMinAggregateInput>;
    _max?: InstanceType<typeof InstallmentMaxAggregateInput>;
}
export declare class InstallmentGroupBy {
    id: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId: number;
    _count?: InstanceType<typeof InstallmentCountAggregate>;
    _avg?: InstanceType<typeof InstallmentAvgAggregate>;
    _sum?: InstanceType<typeof InstallmentSumAggregate>;
    _min?: InstanceType<typeof InstallmentMinAggregate>;
    _max?: InstanceType<typeof InstallmentMaxAggregate>;
}
export declare class InstallmentListRelationFilter {
    every?: InstanceType<typeof InstallmentWhereInput>;
    some?: InstanceType<typeof InstallmentWhereInput>;
    none?: InstanceType<typeof InstallmentWhereInput>;
}
export declare class InstallmentMaxAggregateInput {
    id?: true;
    number?: true;
    lateFee?: true;
    amount?: true;
    dueDate?: true;
    status?: true;
    transactionId?: true;
    invoiceId?: true;
}
export declare class InstallmentMaxAggregate {
    id?: number;
    number?: number;
    lateFee?: number;
    amount?: number;
    dueDate?: Date | string;
    status?: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId?: number;
}
export declare class InstallmentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
}
export declare class InstallmentMinAggregateInput {
    id?: true;
    number?: true;
    lateFee?: true;
    amount?: true;
    dueDate?: true;
    status?: true;
    transactionId?: true;
    invoiceId?: true;
}
export declare class InstallmentMinAggregate {
    id?: number;
    number?: number;
    lateFee?: number;
    amount?: number;
    dueDate?: Date | string;
    status?: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId?: number;
}
export declare class InstallmentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
}
export declare class InstallmentNullableRelationFilter {
    is?: InstanceType<typeof InstallmentWhereInput>;
    isNot?: InstanceType<typeof InstallmentWhereInput>;
}
export declare class InstallmentOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class InstallmentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionId?: InstanceType<typeof SortOrderInput>;
    invoiceId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof InstallmentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof InstallmentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof InstallmentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof InstallmentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof InstallmentSumOrderByAggregateInput>;
}
export declare class InstallmentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionId?: InstanceType<typeof SortOrderInput>;
    invoiceId?: keyof typeof SortOrder;
    transaction?: InstanceType<typeof TransactionOrderByWithRelationInput>;
    invoice?: InstanceType<typeof InvoiceOrderByWithRelationInput>;
}
export declare class InstallmentScalarWhereWithAggregatesInput {
    AND?: Array<InstallmentScalarWhereWithAggregatesInput>;
    OR?: Array<InstallmentScalarWhereWithAggregatesInput>;
    NOT?: Array<InstallmentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    number?: InstanceType<typeof IntWithAggregatesFilter>;
    lateFee?: InstanceType<typeof FloatWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    dueDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumInstallmentStatusWithAggregatesFilter>;
    transactionId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    invoiceId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class InstallmentScalarWhereInput {
    AND?: Array<InstallmentScalarWhereInput>;
    OR?: Array<InstallmentScalarWhereInput>;
    NOT?: Array<InstallmentScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    number?: InstanceType<typeof IntFilter>;
    lateFee?: InstanceType<typeof FloatFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    dueDate?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumInstallmentStatusFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    invoiceId?: InstanceType<typeof IntFilter>;
}
export declare class InstallmentSumAggregateInput {
    id?: true;
    number?: true;
    lateFee?: true;
    amount?: true;
    transactionId?: true;
    invoiceId?: true;
}
export declare class InstallmentSumAggregate {
    id?: number;
    number?: number;
    lateFee?: number;
    amount?: number;
    transactionId?: number;
    invoiceId?: number;
}
export declare class InstallmentSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    number?: keyof typeof SortOrder;
    lateFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
}
export declare class InstallmentUncheckedCreateNestedManyWithoutInvoiceInput {
    create?: Array<InstallmentCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutInvoiceInput>;
    createMany?: InstanceType<typeof InstallmentCreateManyInvoiceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
}
export declare class InstallmentUncheckedCreateWithoutInvoiceInput {
    id?: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    transaction?: InstanceType<typeof TransactionUncheckedCreateNestedOneWithoutInstallmentInput>;
}
export declare class InstallmentUncheckedCreateWithoutTransactionInput {
    id?: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId: number;
}
export declare class InstallmentUncheckedCreateInput {
    id?: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date | string;
    status: keyof typeof InstallmentStatus;
    transactionId?: number;
    invoiceId: number;
    transaction?: InstanceType<typeof TransactionUncheckedCreateNestedOneWithoutInstallmentInput>;
}
export declare class InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput {
    create?: Array<InstallmentCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutInvoiceInput>;
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutInvoiceInput>;
    createMany?: InstanceType<typeof InstallmentCreateManyInvoiceInputEnvelope>;
    set?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutInvoiceInput>;
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutInvoiceInput>;
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
export declare class InstallmentUncheckedUpdateManyWithoutInvoiceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class InstallmentUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class InstallmentUncheckedUpdateWithoutInvoiceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUncheckedUpdateOneWithoutInstallmentNestedInput>;
}
export declare class InstallmentUncheckedUpdateWithoutTransactionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class InstallmentUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUncheckedUpdateOneWithoutInstallmentNestedInput>;
}
export declare class InstallmentUpdateManyMutationInput {
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class InstallmentUpdateManyWithWhereWithoutInvoiceInput {
    where: InstanceType<typeof InstallmentScalarWhereInput>;
    data: InstanceType<typeof InstallmentUpdateManyMutationInput>;
}
export declare class InstallmentUpdateManyWithoutInvoiceNestedInput {
    create?: Array<InstallmentCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutInvoiceInput>;
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutInvoiceInput>;
    createMany?: InstanceType<typeof InstallmentCreateManyInvoiceInputEnvelope>;
    set?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>>;
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutInvoiceInput>;
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutInvoiceInput>;
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
export declare class InstallmentUpdateOneWithoutTransactionNestedInput {
    create?: InstanceType<typeof InstallmentCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof InstallmentCreateOrConnectWithoutTransactionInput>;
    upsert?: InstanceType<typeof InstallmentUpsertWithoutTransactionInput>;
    disconnect?: InstanceType<typeof InstallmentWhereInput>;
    delete?: InstanceType<typeof InstallmentWhereInput>;
    connect?: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof InstallmentUpdateToOneWithWhereWithoutTransactionInput>;
}
export declare class InstallmentUpdateToOneWithWhereWithoutTransactionInput {
    where?: InstanceType<typeof InstallmentWhereInput>;
    data: InstanceType<typeof InstallmentUpdateWithoutTransactionInput>;
}
export declare class InstallmentUpdateWithWhereUniqueWithoutInvoiceInput {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof InstallmentUpdateWithoutInvoiceInput>;
}
export declare class InstallmentUpdateWithoutInvoiceInput {
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneWithoutInstallmentNestedInput>;
}
export declare class InstallmentUpdateWithoutTransactionInput {
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput>;
}
export declare class InstallmentUpdateInput {
    number?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    lateFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumInstallmentStatusFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneWithoutInstallmentNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput>;
}
export declare class InstallmentUpsertWithWhereUniqueWithoutInvoiceInput {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof InstallmentUpdateWithoutInvoiceInput>;
    create: InstanceType<typeof InstallmentCreateWithoutInvoiceInput>;
}
export declare class InstallmentUpsertWithoutTransactionInput {
    update: InstanceType<typeof InstallmentUpdateWithoutTransactionInput>;
    create: InstanceType<typeof InstallmentCreateWithoutTransactionInput>;
    where?: InstanceType<typeof InstallmentWhereInput>;
}
export declare class InstallmentWhereUniqueInput {
    id?: number;
    AND?: Array<InstallmentWhereInput>;
    OR?: Array<InstallmentWhereInput>;
    NOT?: Array<InstallmentWhereInput>;
    number?: InstanceType<typeof IntFilter>;
    lateFee?: InstanceType<typeof FloatFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    dueDate?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumInstallmentStatusFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    invoiceId?: InstanceType<typeof IntFilter>;
    transaction?: InstanceType<typeof TransactionNullableRelationFilter>;
    invoice?: InstanceType<typeof InvoiceRelationFilter>;
}
export declare class InstallmentWhereInput {
    AND?: Array<InstallmentWhereInput>;
    OR?: Array<InstallmentWhereInput>;
    NOT?: Array<InstallmentWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    number?: InstanceType<typeof IntFilter>;
    lateFee?: InstanceType<typeof FloatFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    dueDate?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumInstallmentStatusFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    invoiceId?: InstanceType<typeof IntFilter>;
    transaction?: InstanceType<typeof TransactionNullableRelationFilter>;
    invoice?: InstanceType<typeof InvoiceRelationFilter>;
}
export declare class Installment {
    id: number;
    number: number;
    lateFee: number;
    amount: number;
    dueDate: Date;
    status: keyof typeof InstallmentStatus;
    transactionId: number | null;
    invoiceId: number;
    transaction?: InstanceType<typeof Transaction> | null;
    invoice?: InstanceType<typeof Invoice>;
}
export declare class UpdateManyInstallmentArgs {
    data: InstanceType<typeof InstallmentUpdateManyMutationInput>;
    where?: InstanceType<typeof InstallmentWhereInput>;
}
export declare class UpdateOneInstallmentArgs {
    data: InstanceType<typeof InstallmentUpdateInput>;
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
}
export declare class UpsertOneInstallmentArgs {
    where: Prisma.AtLeast<InstallmentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InstallmentCreateInput>;
    update: InstanceType<typeof InstallmentUpdateInput>;
}
export declare class AggregateInvoice {
    _count?: InstanceType<typeof InvoiceCountAggregate>;
    _avg?: InstanceType<typeof InvoiceAvgAggregate>;
    _sum?: InstanceType<typeof InvoiceSumAggregate>;
    _min?: InstanceType<typeof InvoiceMinAggregate>;
    _max?: InstanceType<typeof InvoiceMaxAggregate>;
}
export declare class CreateManyInvoiceArgs {
    data: Array<InvoiceCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneInvoiceArgs {
    data: InstanceType<typeof InvoiceCreateInput>;
}
export declare class DeleteManyInvoiceArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class DeleteOneInvoiceArgs {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class FindFirstInvoiceOrThrowArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
    orderBy?: Array<InvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceScalarFieldEnum>;
}
export declare class FindFirstInvoiceArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
    orderBy?: Array<InvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceScalarFieldEnum>;
}
export declare class FindManyInvoiceArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
    orderBy?: Array<InvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceScalarFieldEnum>;
}
export declare class FindUniqueInvoiceOrThrowArgs {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class FindUniqueInvoiceArgs {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class InvoiceAggregateArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
    orderBy?: Array<InvoiceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvoiceCountAggregateInput>;
    _avg?: InstanceType<typeof InvoiceAvgAggregateInput>;
    _sum?: InstanceType<typeof InvoiceSumAggregateInput>;
    _min?: InstanceType<typeof InvoiceMinAggregateInput>;
    _max?: InstanceType<typeof InvoiceMaxAggregateInput>;
}
export declare class InvoiceAvgAggregateInput {
    id?: true;
    adminFee?: true;
    amount?: true;
    uniqueCode?: true;
}
export declare class InvoiceAvgAggregate {
    id?: number;
    adminFee?: number;
    amount?: number;
    uniqueCode?: number;
}
export declare class InvoiceAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
}
export declare class InvoiceCountAggregateInput {
    id?: true;
    adminFee?: true;
    amount?: true;
    uniqueCode?: true;
    createdAt?: true;
    _all?: true;
}
export declare class InvoiceCountAggregate {
    id: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt: number;
    _all: number;
}
export declare class InvoiceCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class InvoiceCount {
    transactions?: number;
    Installments?: number;
}
export declare class InvoiceCreateManyInput {
    id?: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
}
export declare class InvoiceCreateNestedOneWithoutInstallmentsInput {
    create?: InstanceType<typeof InvoiceCreateWithoutInstallmentsInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutInstallmentsInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class InvoiceCreateNestedOneWithoutOrderInput {
    create?: InstanceType<typeof InvoiceCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutOrderInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class InvoiceCreateNestedOneWithoutTransactionsInput {
    create?: InstanceType<typeof InvoiceCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class InvoiceCreateOrConnectWithoutInstallmentsInput {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InvoiceCreateWithoutInstallmentsInput>;
}
export declare class InvoiceCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InvoiceCreateWithoutOrderInput>;
}
export declare class InvoiceCreateOrConnectWithoutTransactionsInput {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InvoiceCreateWithoutTransactionsInput>;
}
export declare class InvoiceCreateWithoutInstallmentsInput {
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutInvoiceInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceCreateWithoutOrderInput {
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceCreateWithoutTransactionsInput {
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceCreateInput {
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderCreateNestedOneWithoutInvoiceInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceGroupByArgs {
    where?: InstanceType<typeof InvoiceWhereInput>;
    orderBy?: Array<InvoiceOrderByWithAggregationInput>;
    by: Array<keyof typeof InvoiceScalarFieldEnum>;
    having?: InstanceType<typeof InvoiceScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvoiceCountAggregateInput>;
    _avg?: InstanceType<typeof InvoiceAvgAggregateInput>;
    _sum?: InstanceType<typeof InvoiceSumAggregateInput>;
    _min?: InstanceType<typeof InvoiceMinAggregateInput>;
    _max?: InstanceType<typeof InvoiceMaxAggregateInput>;
}
export declare class InvoiceGroupBy {
    id: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof InvoiceCountAggregate>;
    _avg?: InstanceType<typeof InvoiceAvgAggregate>;
    _sum?: InstanceType<typeof InvoiceSumAggregate>;
    _min?: InstanceType<typeof InvoiceMinAggregate>;
    _max?: InstanceType<typeof InvoiceMaxAggregate>;
}
export declare class InvoiceMaxAggregateInput {
    id?: true;
    adminFee?: true;
    amount?: true;
    uniqueCode?: true;
    createdAt?: true;
}
export declare class InvoiceMaxAggregate {
    id?: number;
    adminFee?: number;
    amount?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class InvoiceMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class InvoiceMinAggregateInput {
    id?: true;
    adminFee?: true;
    amount?: true;
    uniqueCode?: true;
    createdAt?: true;
}
export declare class InvoiceMinAggregate {
    id?: number;
    adminFee?: number;
    amount?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class InvoiceMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class InvoiceNullableRelationFilter {
    is?: InstanceType<typeof InvoiceWhereInput>;
    isNot?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class InvoiceOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof InvoiceCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof InvoiceAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof InvoiceMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof InvoiceMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof InvoiceSumOrderByAggregateInput>;
}
export declare class InvoiceOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    Order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    transactions?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    Installments?: InstanceType<typeof InstallmentOrderByRelationAggregateInput>;
}
export declare class InvoiceRelationFilter {
    is?: InstanceType<typeof InvoiceWhereInput>;
    isNot?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class InvoiceScalarWhereWithAggregatesInput {
    AND?: Array<InvoiceScalarWhereWithAggregatesInput>;
    OR?: Array<InvoiceScalarWhereWithAggregatesInput>;
    NOT?: Array<InvoiceScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    adminFee?: InstanceType<typeof FloatWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    uniqueCode?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class InvoiceSumAggregateInput {
    id?: true;
    adminFee?: true;
    amount?: true;
    uniqueCode?: true;
}
export declare class InvoiceSumAggregate {
    id?: number;
    adminFee?: number;
    amount?: number;
    uniqueCode?: number;
}
export declare class InvoiceSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    adminFee?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
}
export declare class InvoiceUncheckedCreateWithoutInstallmentsInput {
    id?: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderUncheckedCreateNestedOneWithoutInvoiceInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceUncheckedCreateWithoutOrderInput {
    id?: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceUncheckedCreateWithoutTransactionsInput {
    id?: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderUncheckedCreateNestedOneWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceUncheckedCreateInput {
    id?: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt?: Date | string;
    Order?: InstanceType<typeof OrderUncheckedCreateNestedOneWithoutInvoiceInput>;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutInvoiceInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedCreateNestedManyWithoutInvoiceInput>;
}
export declare class InvoiceUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class InvoiceUncheckedUpdateWithoutInstallmentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUncheckedUpdateOneWithoutInvoiceNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUncheckedUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUncheckedUpdateOneWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUncheckedUpdateOneWithoutInvoiceNestedInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUncheckedUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUpdateManyMutationInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class InvoiceUpdateOneRequiredWithoutInstallmentsNestedInput {
    create?: InstanceType<typeof InvoiceCreateWithoutInstallmentsInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutInstallmentsInput>;
    upsert?: InstanceType<typeof InvoiceUpsertWithoutInstallmentsInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof InvoiceUpdateToOneWithWhereWithoutInstallmentsInput>;
}
export declare class InvoiceUpdateOneRequiredWithoutOrderNestedInput {
    create?: InstanceType<typeof InvoiceCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutOrderInput>;
    upsert?: InstanceType<typeof InvoiceUpsertWithoutOrderInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof InvoiceUpdateToOneWithWhereWithoutOrderInput>;
}
export declare class InvoiceUpdateOneWithoutTransactionsNestedInput {
    create?: InstanceType<typeof InvoiceCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof InvoiceCreateOrConnectWithoutTransactionsInput>;
    upsert?: InstanceType<typeof InvoiceUpsertWithoutTransactionsInput>;
    disconnect?: InstanceType<typeof InvoiceWhereInput>;
    delete?: InstanceType<typeof InvoiceWhereInput>;
    connect?: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof InvoiceUpdateToOneWithWhereWithoutTransactionsInput>;
}
export declare class InvoiceUpdateToOneWithWhereWithoutInstallmentsInput {
    where?: InstanceType<typeof InvoiceWhereInput>;
    data: InstanceType<typeof InvoiceUpdateWithoutInstallmentsInput>;
}
export declare class InvoiceUpdateToOneWithWhereWithoutOrderInput {
    where?: InstanceType<typeof InvoiceWhereInput>;
    data: InstanceType<typeof InvoiceUpdateWithoutOrderInput>;
}
export declare class InvoiceUpdateToOneWithWhereWithoutTransactionsInput {
    where?: InstanceType<typeof InvoiceWhereInput>;
    data: InstanceType<typeof InvoiceUpdateWithoutTransactionsInput>;
}
export declare class InvoiceUpdateWithoutInstallmentsInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutInvoiceNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUpdateWithoutOrderInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUpdateWithoutTransactionsInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUpdateInput {
    adminFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Order?: InstanceType<typeof OrderUpdateOneWithoutInvoiceNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutInvoiceNestedInput>;
    Installments?: InstanceType<typeof InstallmentUpdateManyWithoutInvoiceNestedInput>;
}
export declare class InvoiceUpsertWithoutInstallmentsInput {
    update: InstanceType<typeof InvoiceUpdateWithoutInstallmentsInput>;
    create: InstanceType<typeof InvoiceCreateWithoutInstallmentsInput>;
    where?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class InvoiceUpsertWithoutOrderInput {
    update: InstanceType<typeof InvoiceUpdateWithoutOrderInput>;
    create: InstanceType<typeof InvoiceCreateWithoutOrderInput>;
    where?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class InvoiceUpsertWithoutTransactionsInput {
    update: InstanceType<typeof InvoiceUpdateWithoutTransactionsInput>;
    create: InstanceType<typeof InvoiceCreateWithoutTransactionsInput>;
    where?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class InvoiceWhereUniqueInput {
    id?: number;
    AND?: Array<InvoiceWhereInput>;
    OR?: Array<InvoiceWhereInput>;
    NOT?: Array<InvoiceWhereInput>;
    adminFee?: InstanceType<typeof FloatFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    uniqueCode?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    Order?: InstanceType<typeof OrderNullableRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    Installments?: InstanceType<typeof InstallmentListRelationFilter>;
}
export declare class InvoiceWhereInput {
    AND?: Array<InvoiceWhereInput>;
    OR?: Array<InvoiceWhereInput>;
    NOT?: Array<InvoiceWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    adminFee?: InstanceType<typeof FloatFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    uniqueCode?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    Order?: InstanceType<typeof OrderNullableRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    Installments?: InstanceType<typeof InstallmentListRelationFilter>;
}
export declare class Invoice {
    id: number;
    adminFee: number;
    amount: number;
    uniqueCode: number;
    createdAt: Date;
    Order?: InstanceType<typeof Order> | null;
    transactions?: Array<Transaction>;
    Installments?: Array<Installment>;
    _count?: InstanceType<typeof InvoiceCount>;
}
export declare class UpdateManyInvoiceArgs {
    data: InstanceType<typeof InvoiceUpdateManyMutationInput>;
    where?: InstanceType<typeof InvoiceWhereInput>;
}
export declare class UpdateOneInvoiceArgs {
    data: InstanceType<typeof InvoiceUpdateInput>;
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
}
export declare class UpsertOneInvoiceArgs {
    where: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;
    create: InstanceType<typeof InvoiceCreateInput>;
    update: InstanceType<typeof InvoiceUpdateInput>;
}
export declare class AggregateItem {
    _count?: InstanceType<typeof ItemCountAggregate>;
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    _sum?: InstanceType<typeof ItemSumAggregate>;
    _min?: InstanceType<typeof ItemMinAggregate>;
    _max?: InstanceType<typeof ItemMaxAggregate>;
}
export declare class CreateManyItemArgs {
    data: Array<ItemCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneItemArgs {
    data: InstanceType<typeof ItemCreateInput>;
}
export declare class DeleteManyItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
}
export declare class DeleteOneItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class FindFirstItemOrThrowArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindFirstItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindManyItemArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
export declare class FindUniqueItemOrThrowArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class FindUniqueItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class ItemAggregateArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}
export declare class ItemAvgAggregateInput {
    id?: true;
    price?: true;
    cost?: true;
}
export declare class ItemAvgAggregate {
    id?: number;
    price?: number;
    cost?: number;
}
export declare class ItemAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
}
export declare class ItemCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    cost?: true;
    userRole?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ItemCountAggregate {
    id: number;
    name: number;
    description: number;
    price: number;
    cost: number;
    userRole: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ItemCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemCount {
    cart?: number;
}
export declare class ItemCreateManyInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemCreateNestedOneWithoutCartInput {
    create?: InstanceType<typeof ItemCreateWithoutCartInput>;
    connectOrCreate?: InstanceType<typeof ItemCreateOrConnectWithoutCartInput>;
    connect?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class ItemCreateOrConnectWithoutCartInput {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ItemCreateWithoutCartInput>;
}
export declare class ItemCreateWithoutCartInput {
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemCreateInput {
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartCreateNestedManyWithoutMembershipItemInput>;
}
export declare class ItemGroupByArgs {
    where?: InstanceType<typeof ItemWhereInput>;
    orderBy?: Array<ItemOrderByWithAggregationInput>;
    by: Array<keyof typeof ItemScalarFieldEnum>;
    having?: InstanceType<typeof ItemScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}
export declare class ItemGroupBy {
    id: number;
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ItemCountAggregate>;
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    _sum?: InstanceType<typeof ItemSumAggregate>;
    _min?: InstanceType<typeof ItemMinAggregate>;
    _max?: InstanceType<typeof ItemMaxAggregate>;
}
export declare class ItemMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    cost?: true;
    userRole?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ItemMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    cost?: number;
    userRole?: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    cost?: true;
    userRole?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ItemMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    cost?: number;
    userRole?: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ItemNullableRelationFilter {
    is?: InstanceType<typeof ItemWhereInput>;
    isNot?: InstanceType<typeof ItemWhereInput>;
}
export declare class ItemOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ItemCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ItemAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ItemMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ItemMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ItemSumOrderByAggregateInput>;
}
export declare class ItemOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    cart?: InstanceType<typeof CartOrderByRelationAggregateInput>;
}
export declare class ItemScalarWhereWithAggregatesInput {
    AND?: Array<ItemScalarWhereWithAggregatesInput>;
    OR?: Array<ItemScalarWhereWithAggregatesInput>;
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    cost?: InstanceType<typeof FloatWithAggregatesFilter>;
    userRole?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ItemSumAggregateInput {
    id?: true;
    price?: true;
    cost?: true;
}
export declare class ItemSumAggregate {
    id?: number;
    price?: number;
    cost?: number;
}
export declare class ItemSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    cost?: keyof typeof SortOrder;
}
export declare class ItemUncheckedCreateWithoutCartInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ItemUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutMembershipItemInput>;
}
export declare class ItemUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUncheckedUpdateWithoutCartInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUncheckedUpdateManyWithoutMembershipItemNestedInput>;
}
export declare class ItemUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUpdateOneWithoutCartNestedInput {
    create?: InstanceType<typeof ItemCreateWithoutCartInput>;
    connectOrCreate?: InstanceType<typeof ItemCreateOrConnectWithoutCartInput>;
    upsert?: InstanceType<typeof ItemUpsertWithoutCartInput>;
    disconnect?: InstanceType<typeof ItemWhereInput>;
    delete?: InstanceType<typeof ItemWhereInput>;
    connect?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ItemUpdateToOneWithWhereWithoutCartInput>;
}
export declare class ItemUpdateToOneWithWhereWithoutCartInput {
    where?: InstanceType<typeof ItemWhereInput>;
    data: InstanceType<typeof ItemUpdateWithoutCartInput>;
}
export declare class ItemUpdateWithoutCartInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ItemUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    cost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUpdateManyWithoutMembershipItemNestedInput>;
}
export declare class ItemUpsertWithoutCartInput {
    update: InstanceType<typeof ItemUpdateWithoutCartInput>;
    create: InstanceType<typeof ItemCreateWithoutCartInput>;
    where?: InstanceType<typeof ItemWhereInput>;
}
export declare class ItemWhereUniqueInput {
    id?: number;
    AND?: Array<ItemWhereInput>;
    OR?: Array<ItemWhereInput>;
    NOT?: Array<ItemWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    cart?: InstanceType<typeof CartListRelationFilter>;
}
export declare class ItemWhereInput {
    AND?: Array<ItemWhereInput>;
    OR?: Array<ItemWhereInput>;
    NOT?: Array<ItemWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    price?: InstanceType<typeof FloatFilter>;
    cost?: InstanceType<typeof FloatFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    cart?: InstanceType<typeof CartListRelationFilter>;
}
export declare class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    cost: number;
    userRole: keyof typeof UserRole;
    createdAt: Date;
    updatedAt: Date;
    cart?: Array<Cart>;
    _count?: InstanceType<typeof ItemCount>;
}
export declare class UpdateManyItemArgs {
    data: InstanceType<typeof ItemUpdateManyMutationInput>;
    where?: InstanceType<typeof ItemWhereInput>;
}
export declare class UpdateOneItemArgs {
    data: InstanceType<typeof ItemUpdateInput>;
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
export declare class UpsertOneItemArgs {
    where: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ItemCreateInput>;
    update: InstanceType<typeof ItemUpdateInput>;
}
export declare class AggregateOrder {
    _count?: InstanceType<typeof OrderCountAggregate>;
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    _sum?: InstanceType<typeof OrderSumAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class CreateManyOrderArgs {
    data: Array<OrderCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneOrderArgs {
    data: InstanceType<typeof OrderCreateInput>;
}
export declare class DeleteManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class DeleteOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class FindFirstOrderOrThrowArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindFirstOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindManyOrderArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}
export declare class FindUniqueOrderOrThrowArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class FindUniqueOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class OrderAggregateArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderAvgAggregateInput {
    id?: true;
    shippingId?: true;
    invoiceId?: true;
    platformFee?: true;
    total?: true;
}
export declare class OrderAvgAggregate {
    id?: number;
    shippingId?: number;
    invoiceId?: number;
    platformFee?: number;
    total?: number;
}
export declare class OrderAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
}
export declare class OrderCountAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    invoiceId?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class OrderCountAggregate {
    id: number;
    status: number;
    orderById: number;
    shippingId: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class OrderCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderCount {
    cart?: number;
}
export declare class OrderCreateManyOrderByInputEnvelope {
    data: Array<OrderCreateManyOrderByInput>;
    skipDuplicates?: boolean;
}
export declare class OrderCreateManyOrderByInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateManyInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderCreateNestedManyWithoutOrderByInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
}
export declare class OrderCreateNestedOneWithoutCartInput {
    create?: InstanceType<typeof OrderCreateWithoutCartInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutCartInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class OrderCreateNestedOneWithoutInvoiceInput {
    create?: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutInvoiceInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class OrderCreateNestedOneWithoutShippingInput {
    create?: InstanceType<typeof OrderCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutShippingInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class OrderCreateOrConnectWithoutCartInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    create: InstanceType<typeof OrderCreateWithoutCartInput>;
}
export declare class OrderCreateOrConnectWithoutInvoiceInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    create: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
}
export declare class OrderCreateOrConnectWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    create: InstanceType<typeof OrderCreateWithoutOrderByInput>;
}
export declare class OrderCreateOrConnectWithoutShippingInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    create: InstanceType<typeof OrderCreateWithoutShippingInput>;
}
export declare class OrderCreateWithoutCartInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutOrderInput>;
}
export declare class OrderCreateWithoutInvoiceInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    cart?: InstanceType<typeof CartCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
}
export declare class OrderCreateWithoutOrderByInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutOrderInput>;
}
export declare class OrderCreateWithoutShippingInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    cart?: InstanceType<typeof CartCreateNestedManyWithoutOrderInput>;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutOrderInput>;
}
export declare class OrderCreateInput {
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderBy: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    cart?: InstanceType<typeof CartCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingCreateNestedOneWithoutOrderInput>;
    invoice: InstanceType<typeof InvoiceCreateNestedOneWithoutOrderInput>;
}
export declare class OrderGroupByArgs {
    where?: InstanceType<typeof OrderWhereInput>;
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    by: Array<keyof typeof OrderScalarFieldEnum>;
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}
export declare class OrderGroupBy {
    id: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof OrderCountAggregate>;
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    _sum?: InstanceType<typeof OrderSumAggregate>;
    _min?: InstanceType<typeof OrderMinAggregate>;
    _max?: InstanceType<typeof OrderMaxAggregate>;
}
export declare class OrderListRelationFilter {
    every?: InstanceType<typeof OrderWhereInput>;
    some?: InstanceType<typeof OrderWhereInput>;
    none?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderMaxAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    invoiceId?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMaxAggregate {
    id?: number;
    status?: keyof typeof TransactionStatus;
    orderById?: string;
    shippingId?: number;
    invoiceId?: number;
    platformFee?: number;
    total?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderMinAggregateInput {
    id?: true;
    status?: true;
    orderById?: true;
    shippingId?: true;
    invoiceId?: true;
    platformFee?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class OrderMinAggregate {
    id?: number;
    status?: keyof typeof TransactionStatus;
    orderById?: string;
    shippingId?: number;
    invoiceId?: number;
    platformFee?: number;
    total?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class OrderMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class OrderNullableRelationFilter {
    is?: InstanceType<typeof OrderWhereInput>;
    isNot?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class OrderOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: InstanceType<typeof SortOrderInput>;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof OrderAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof OrderSumOrderByAggregateInput>;
}
export declare class OrderOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    orderById?: keyof typeof SortOrder;
    shippingId?: InstanceType<typeof SortOrderInput>;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    orderBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    cart?: InstanceType<typeof CartOrderByRelationAggregateInput>;
    shipping?: InstanceType<typeof ShippingOrderByWithRelationInput>;
    invoice?: InstanceType<typeof InvoiceOrderByWithRelationInput>;
}
export declare class OrderRelationFilter {
    is?: InstanceType<typeof OrderWhereInput>;
    isNot?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    status?: InstanceType<typeof EnumTransactionStatusWithAggregatesFilter>;
    orderById?: InstanceType<typeof StringWithAggregatesFilter>;
    shippingId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    invoiceId?: InstanceType<typeof IntWithAggregatesFilter>;
    platformFee?: InstanceType<typeof FloatWithAggregatesFilter>;
    total?: InstanceType<typeof FloatWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class OrderScalarWhereInput {
    AND?: Array<OrderScalarWhereInput>;
    OR?: Array<OrderScalarWhereInput>;
    NOT?: Array<OrderScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    orderById?: InstanceType<typeof StringFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    invoiceId?: InstanceType<typeof IntFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class OrderSumAggregateInput {
    id?: true;
    shippingId?: true;
    invoiceId?: true;
    platformFee?: true;
    total?: true;
}
export declare class OrderSumAggregate {
    id?: number;
    shippingId?: number;
    invoiceId?: number;
    platformFee?: number;
    total?: number;
}
export declare class OrderSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    shippingId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    platformFee?: keyof typeof SortOrder;
    total?: keyof typeof SortOrder;
}
export declare class OrderUncheckedCreateNestedManyWithoutOrderByInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
}
export declare class OrderUncheckedCreateNestedOneWithoutInvoiceInput {
    create?: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutInvoiceInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class OrderUncheckedCreateWithoutCartInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutInvoiceInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutOrderByInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
}
export declare class OrderUncheckedCreateWithoutShippingInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutOrderInput>;
}
export declare class OrderUncheckedCreateInput {
    id?: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId?: number;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutOrderInput>;
    shipping?: InstanceType<typeof ShippingUncheckedCreateNestedOneWithoutOrderInput>;
}
export declare class OrderUncheckedUpdateManyWithoutOrderByNestedInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutOrderByInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUncheckedUpdateManyWithoutOrderByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUncheckedUpdateOneWithoutInvoiceNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutInvoiceInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutInvoiceInput>;
    disconnect?: InstanceType<typeof OrderWhereInput>;
    delete?: InstanceType<typeof OrderWhereInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutInvoiceInput>;
}
export declare class OrderUncheckedUpdateWithoutCartInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutInvoiceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutOrderByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateWithoutShippingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUncheckedUpdateManyWithoutOrderNestedInput>;
}
export declare class OrderUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    orderById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUncheckedUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUncheckedUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUpdateManyMutationInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class OrderUpdateManyWithWhereWithoutOrderByInput {
    where: InstanceType<typeof OrderScalarWhereInput>;
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
}
export declare class OrderUpdateManyWithoutOrderByNestedInput {
    create?: Array<OrderCreateWithoutOrderByInput>;
    connectOrCreate?: Array<OrderCreateOrConnectWithoutOrderByInput>;
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutOrderByInput>;
    createMany?: InstanceType<typeof OrderCreateManyOrderByInputEnvelope>;
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>>;
    update?: Array<OrderUpdateWithWhereUniqueWithoutOrderByInput>;
    updateMany?: Array<OrderUpdateManyWithWhereWithoutOrderByInput>;
    deleteMany?: Array<OrderScalarWhereInput>;
}
export declare class OrderUpdateOneRequiredWithoutCartNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutCartInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutCartInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutCartInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutCartInput>;
}
export declare class OrderUpdateOneRequiredWithoutShippingNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutShippingInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutShippingInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutShippingInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutShippingInput>;
}
export declare class OrderUpdateOneWithoutInvoiceNestedInput {
    create?: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutInvoiceInput>;
    upsert?: InstanceType<typeof OrderUpsertWithoutInvoiceInput>;
    disconnect?: InstanceType<typeof OrderWhereInput>;
    delete?: InstanceType<typeof OrderWhereInput>;
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutInvoiceInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutCartInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutCartInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutInvoiceInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutInvoiceInput>;
}
export declare class OrderUpdateToOneWithWhereWithoutShippingInput {
    where?: InstanceType<typeof OrderWhereInput>;
    data: InstanceType<typeof OrderUpdateWithoutShippingInput>;
}
export declare class OrderUpdateWithWhereUniqueWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    data: InstanceType<typeof OrderUpdateWithoutOrderByInput>;
}
export declare class OrderUpdateWithoutCartInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutInvoiceInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    cart?: InstanceType<typeof CartUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutOrderByInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    cart?: InstanceType<typeof CartUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutOrderNestedInput>;
}
export declare class OrderUpdateWithoutShippingInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    cart?: InstanceType<typeof CartUpdateManyWithoutOrderNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutOrderNestedInput>;
}
export declare class OrderUpdateInput {
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    shippingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    platformFee?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    total?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderBy?: InstanceType<typeof UserUpdateOneRequiredWithoutOrdersNestedInput>;
    cart?: InstanceType<typeof CartUpdateManyWithoutOrderNestedInput>;
    shipping?: InstanceType<typeof ShippingUpdateOneWithoutOrderNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneRequiredWithoutOrderNestedInput>;
}
export declare class OrderUpsertWithWhereUniqueWithoutOrderByInput {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    update: InstanceType<typeof OrderUpdateWithoutOrderByInput>;
    create: InstanceType<typeof OrderCreateWithoutOrderByInput>;
}
export declare class OrderUpsertWithoutCartInput {
    update: InstanceType<typeof OrderUpdateWithoutCartInput>;
    create: InstanceType<typeof OrderCreateWithoutCartInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderUpsertWithoutInvoiceInput {
    update: InstanceType<typeof OrderUpdateWithoutInvoiceInput>;
    create: InstanceType<typeof OrderCreateWithoutInvoiceInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderUpsertWithoutShippingInput {
    update: InstanceType<typeof OrderUpdateWithoutShippingInput>;
    create: InstanceType<typeof OrderCreateWithoutShippingInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class OrderWhereUniqueInput {
    id?: number;
    orderById?: string;
    invoiceId?: number;
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orderBy?: InstanceType<typeof UserRelationFilter>;
    cart?: InstanceType<typeof CartListRelationFilter>;
    shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
    invoice?: InstanceType<typeof InvoiceRelationFilter>;
}
export declare class OrderWhereInput {
    AND?: Array<OrderWhereInput>;
    OR?: Array<OrderWhereInput>;
    NOT?: Array<OrderWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    orderById?: InstanceType<typeof StringFilter>;
    shippingId?: InstanceType<typeof IntNullableFilter>;
    invoiceId?: InstanceType<typeof IntFilter>;
    platformFee?: InstanceType<typeof FloatFilter>;
    total?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    orderBy?: InstanceType<typeof UserRelationFilter>;
    cart?: InstanceType<typeof CartListRelationFilter>;
    shipping?: InstanceType<typeof ShippingNullableRelationFilter>;
    invoice?: InstanceType<typeof InvoiceRelationFilter>;
}
export declare class Order {
    id: number;
    status: keyof typeof TransactionStatus;
    orderById: string;
    shippingId: number | null;
    invoiceId: number;
    platformFee: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    orderBy?: InstanceType<typeof User>;
    cart?: Array<Cart>;
    shipping?: InstanceType<typeof Shipping> | null;
    invoice?: InstanceType<typeof Invoice>;
    _count?: InstanceType<typeof OrderCount>;
}
export declare class UpdateManyOrderArgs {
    data: InstanceType<typeof OrderUpdateManyMutationInput>;
    where?: InstanceType<typeof OrderWhereInput>;
}
export declare class UpdateOneOrderArgs {
    data: InstanceType<typeof OrderUpdateInput>;
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
}
export declare class UpsertOneOrderArgs {
    where: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'orderById' | 'invoiceId'>;
    create: InstanceType<typeof OrderCreateInput>;
    update: InstanceType<typeof OrderUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class BoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class BoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumAccountCategoryFieldUpdateOperationsInput {
    set?: keyof typeof AccountCategory;
}
export declare class EnumAccountCategoryFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class EnumAccountCategoryWithAggregatesFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class EnumFaqTypeFieldUpdateOperationsInput {
    set?: keyof typeof FaqType;
}
export declare class EnumFaqTypeFilter {
    equals?: keyof typeof FaqType;
    in?: Array<keyof typeof FaqType>;
    notIn?: Array<keyof typeof FaqType>;
    not?: InstanceType<typeof NestedEnumFaqTypeFilter>;
}
export declare class EnumFaqTypeWithAggregatesFilter {
    equals?: keyof typeof FaqType;
    in?: Array<keyof typeof FaqType>;
    notIn?: Array<keyof typeof FaqType>;
    not?: InstanceType<typeof NestedEnumFaqTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFaqTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFaqTypeFilter>;
}
export declare class EnumFileTypeFieldUpdateOperationsInput {
    set?: keyof typeof FileType;
}
export declare class EnumFileTypeFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class EnumFileTypeNullableFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
}
export declare class EnumFileTypeNullableWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
}
export declare class EnumFileTypeWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class EnumInstallmentStatusFieldUpdateOperationsInput {
    set?: keyof typeof InstallmentStatus;
}
export declare class EnumInstallmentStatusFilter {
    equals?: keyof typeof InstallmentStatus;
    in?: Array<keyof typeof InstallmentStatus>;
    notIn?: Array<keyof typeof InstallmentStatus>;
    not?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
}
export declare class EnumInstallmentStatusWithAggregatesFilter {
    equals?: keyof typeof InstallmentStatus;
    in?: Array<keyof typeof InstallmentStatus>;
    notIn?: Array<keyof typeof InstallmentStatus>;
    not?: InstanceType<typeof NestedEnumInstallmentStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
    _max?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
}
export declare class EnumProjectCategoryFieldUpdateOperationsInput {
    set?: keyof typeof ProjectCategory;
}
export declare class EnumProjectCategoryFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class EnumProjectCategoryWithAggregatesFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class EnumShippingStatusFieldUpdateOperationsInput {
    set?: keyof typeof ShippingStatus;
}
export declare class EnumShippingStatusFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class EnumShippingStatusWithAggregatesFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumShippingStatusFilter>;
    _max?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class EnumThemeFieldUpdateOperationsInput {
    set?: keyof typeof Theme;
}
export declare class EnumThemeFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class EnumThemeWithAggregatesFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumThemeFilter>;
    _max?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class EnumTransactionCategoryFieldUpdateOperationsInput {
    set?: keyof typeof TransactionCategory;
}
export declare class EnumTransactionCategoryFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class EnumTransactionCategoryWithAggregatesFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class EnumTransactionStatusFieldUpdateOperationsInput {
    set?: keyof typeof TransactionStatus;
}
export declare class EnumTransactionStatusFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class EnumTransactionStatusWithAggregatesFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class EnumUserNotificationCategoryFieldUpdateOperationsInput {
    set?: keyof typeof UserNotificationCategory;
}
export declare class EnumUserNotificationCategoryFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class EnumUserNotificationCategoryWithAggregatesFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class EnumUserRoleFieldUpdateOperationsInput {
    set?: keyof typeof UserRole;
}
export declare class EnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class EnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class EnumUserStatusFieldUpdateOperationsInput {
    set?: keyof typeof UserStatus;
}
export declare class EnumUserStatusFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class EnumUserStatusWithAggregatesFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class EnumUserTypeFieldUpdateOperationsInput {
    set?: keyof typeof UserType;
}
export declare class EnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class EnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class FloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class FloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class FloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class FloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class FloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedBoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumAccountCategoryFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class NestedEnumAccountCategoryWithAggregatesFilter {
    equals?: keyof typeof AccountCategory;
    in?: Array<keyof typeof AccountCategory>;
    notIn?: Array<keyof typeof AccountCategory>;
    not?: InstanceType<typeof NestedEnumAccountCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumAccountCategoryFilter>;
}
export declare class NestedEnumFaqTypeFilter {
    equals?: keyof typeof FaqType;
    in?: Array<keyof typeof FaqType>;
    notIn?: Array<keyof typeof FaqType>;
    not?: InstanceType<typeof NestedEnumFaqTypeFilter>;
}
export declare class NestedEnumFaqTypeWithAggregatesFilter {
    equals?: keyof typeof FaqType;
    in?: Array<keyof typeof FaqType>;
    notIn?: Array<keyof typeof FaqType>;
    not?: InstanceType<typeof NestedEnumFaqTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFaqTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFaqTypeFilter>;
}
export declare class NestedEnumFileTypeFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class NestedEnumFileTypeNullableFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
}
export declare class NestedEnumFileTypeNullableWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeNullableFilter>;
}
export declare class NestedEnumFileTypeWithAggregatesFilter {
    equals?: keyof typeof FileType;
    in?: Array<keyof typeof FileType>;
    notIn?: Array<keyof typeof FileType>;
    not?: InstanceType<typeof NestedEnumFileTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumFileTypeFilter>;
    _max?: InstanceType<typeof NestedEnumFileTypeFilter>;
}
export declare class NestedEnumInstallmentStatusFilter {
    equals?: keyof typeof InstallmentStatus;
    in?: Array<keyof typeof InstallmentStatus>;
    notIn?: Array<keyof typeof InstallmentStatus>;
    not?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
}
export declare class NestedEnumInstallmentStatusWithAggregatesFilter {
    equals?: keyof typeof InstallmentStatus;
    in?: Array<keyof typeof InstallmentStatus>;
    notIn?: Array<keyof typeof InstallmentStatus>;
    not?: InstanceType<typeof NestedEnumInstallmentStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
    _max?: InstanceType<typeof NestedEnumInstallmentStatusFilter>;
}
export declare class NestedEnumProjectCategoryFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class NestedEnumProjectCategoryWithAggregatesFilter {
    equals?: keyof typeof ProjectCategory;
    in?: Array<keyof typeof ProjectCategory>;
    notIn?: Array<keyof typeof ProjectCategory>;
    not?: InstanceType<typeof NestedEnumProjectCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumProjectCategoryFilter>;
}
export declare class NestedEnumShippingStatusFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class NestedEnumShippingStatusWithAggregatesFilter {
    equals?: keyof typeof ShippingStatus;
    in?: Array<keyof typeof ShippingStatus>;
    notIn?: Array<keyof typeof ShippingStatus>;
    not?: InstanceType<typeof NestedEnumShippingStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumShippingStatusFilter>;
    _max?: InstanceType<typeof NestedEnumShippingStatusFilter>;
}
export declare class NestedEnumThemeFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class NestedEnumThemeWithAggregatesFilter {
    equals?: keyof typeof Theme;
    in?: Array<keyof typeof Theme>;
    notIn?: Array<keyof typeof Theme>;
    not?: InstanceType<typeof NestedEnumThemeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumThemeFilter>;
    _max?: InstanceType<typeof NestedEnumThemeFilter>;
}
export declare class NestedEnumTransactionCategoryFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class NestedEnumTransactionCategoryWithAggregatesFilter {
    equals?: keyof typeof TransactionCategory;
    in?: Array<keyof typeof TransactionCategory>;
    notIn?: Array<keyof typeof TransactionCategory>;
    not?: InstanceType<typeof NestedEnumTransactionCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionCategoryFilter>;
}
export declare class NestedEnumTransactionStatusFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class NestedEnumTransactionStatusWithAggregatesFilter {
    equals?: keyof typeof TransactionStatus;
    in?: Array<keyof typeof TransactionStatus>;
    notIn?: Array<keyof typeof TransactionStatus>;
    not?: InstanceType<typeof NestedEnumTransactionStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionStatusFilter>;
}
export declare class NestedEnumUserNotificationCategoryFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class NestedEnumUserNotificationCategoryWithAggregatesFilter {
    equals?: keyof typeof UserNotificationCategory;
    in?: Array<keyof typeof UserNotificationCategory>;
    notIn?: Array<keyof typeof UserNotificationCategory>;
    not?: InstanceType<typeof NestedEnumUserNotificationCategoryWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
    _max?: InstanceType<typeof NestedEnumUserNotificationCategoryFilter>;
}
export declare class NestedEnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedEnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedEnumUserStatusFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class NestedEnumUserStatusWithAggregatesFilter {
    equals?: keyof typeof UserStatus;
    in?: Array<keyof typeof UserStatus>;
    notIn?: Array<keyof typeof UserStatus>;
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    _max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}
export declare class NestedEnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedEnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableEnumFileTypeFieldUpdateOperationsInput {
    set?: keyof typeof FileType;
}
export declare class NullableFloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProgram {
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class CreateManyProgramArgs {
    data: Array<ProgramCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramArgs {
    data: InstanceType<typeof ProgramCreateInput>;
}
export declare class DeleteManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class DeleteOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class FindFirstProgramOrThrowArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindFirstProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindUniqueProgramOrThrowArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramAggregateArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramAvgAggregateInput {
    id?: true;
    categoryId?: true;
}
export declare class ProgramAvgAggregate {
    id?: number;
    categoryId?: number;
}
export declare class ProgramAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
}
export declare class ProgramCountAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProgramCountAggregate {
    id: number;
    name: number;
    startDate: number;
    dueDate: number;
    description: number;
    createdById: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProgramCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCount {
    Images?: number;
    participant?: number;
}
export declare class ProgramCreateManyCategoryInputEnvelope {
    data: Array<ProgramCreateManyCategoryInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramCreateManyCategoryInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateManyCreatedByInputEnvelope {
    data: Array<ProgramCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramCreateManyCreatedByInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateManyInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCreateNestedManyWithoutCategoryInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramCreateNestedManyWithoutCreatedByInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramCreateOrConnectWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutCategoryInput>;
}
export declare class ProgramCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutCreatedByInput>;
}
export declare class ProgramCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutImagesInput>;
}
export declare class ProgramCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutParticipantInput>;
}
export declare class ProgramCreateWithoutCategoryInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramCreateWithoutCreatedByInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateWithoutImagesInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateWithoutParticipantInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramCreateInput {
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutProgramImageInput>;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutProgramsCreatedInput>;
    participant?: InstanceType<typeof UserCreateNestedManyWithoutProgramsParticipationInput>;
    category: InstanceType<typeof ProgramCategoryCreateNestedOneWithoutProgramsInput>;
}
export declare class ProgramGroupByArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramScalarFieldEnum>;
    having?: InstanceType<typeof ProgramScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramGroupBy {
    id: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class ProgramListRelationFilter {
    every?: InstanceType<typeof ProgramWhereInput>;
    some?: InstanceType<typeof ProgramWhereInput>;
    none?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramMaxAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramMaxAggregate {
    id?: number;
    name?: string;
    startDate?: Date | string;
    dueDate?: Date | string;
    description?: string;
    createdById?: string;
    categoryId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramMinAggregateInput {
    id?: true;
    name?: true;
    startDate?: true;
    dueDate?: true;
    description?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramMinAggregate {
    id?: number;
    name?: string;
    startDate?: Date | string;
    dueDate?: Date | string;
    description?: string;
    createdById?: string;
    categoryId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramNullableRelationFilter {
    is?: InstanceType<typeof ProgramWhereInput>;
    isNot?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProgramOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: InstanceType<typeof SortOrderInput>;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProgramCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumOrderByAggregateInput>;
}
export declare class ProgramOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    dueDate?: InstanceType<typeof SortOrderInput>;
    description?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    Images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    participant?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    category?: InstanceType<typeof ProgramCategoryOrderByWithRelationInput>;
}
export declare class ProgramScalarWhereWithAggregatesInput {
    AND?: Array<ProgramScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
    categoryId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProgramScalarWhereInput {
    AND?: Array<ProgramScalarWhereInput>;
    OR?: Array<ProgramScalarWhereInput>;
    NOT?: Array<ProgramScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class ProgramSumAggregateInput {
    id?: true;
    categoryId?: true;
}
export declare class ProgramSumAggregate {
    id?: number;
    categoryId?: number;
}
export declare class ProgramSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    categoryId?: keyof typeof SortOrder;
}
export declare class ProgramUncheckedCreateNestedManyWithoutCategoryInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramUncheckedCreateWithoutCategoryInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutCreatedByInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedCreateWithoutParticipantInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
}
export declare class ProgramUncheckedCreateInput {
    id?: number;
    name: string;
    startDate: Date | string;
    dueDate?: Date | string;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProgramImageInput>;
    participant?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutProgramsParticipationInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCategoryInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutParticipantInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateWithoutCategoryInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
}
export declare class ProgramUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutCategoryInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutParticipantInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithoutCategoryNestedInput {
    create?: Array<ProgramCreateWithoutCategoryInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCategoryInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCategoryInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCategoryInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCategoryInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCategoryInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateManyWithoutCreatedByNestedInput {
    create?: Array<ProgramCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof ProgramCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutParticipantInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof ProgramUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof ProgramWhereInput>;
    delete?: InstanceType<typeof ProgramWhereInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class ProgramUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof ProgramWhereInput>;
    data: InstanceType<typeof ProgramUpdateWithoutImagesInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramUpdateWithoutCategoryInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramUpdateWithoutCreatedByInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramUpdateWithoutParticipantInput>;
}
export declare class ProgramUpdateWithoutCategoryInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
}
export declare class ProgramUpdateWithoutCreatedByInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateWithoutParticipantInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    dueDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Images?: InstanceType<typeof ImagesUpdateManyWithoutProgramImageNestedInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutProgramsCreatedNestedInput>;
    participant?: InstanceType<typeof UserUpdateManyWithoutProgramsParticipationNestedInput>;
    category?: InstanceType<typeof ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutCategoryInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramUpdateWithoutCategoryInput>;
    create: InstanceType<typeof ProgramCreateWithoutCategoryInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof ProgramCreateWithoutCreatedByInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ProgramCreateWithoutParticipantInput>;
}
export declare class ProgramUpsertWithoutImagesInput {
    update: InstanceType<typeof ProgramUpdateWithoutImagesInput>;
    create: InstanceType<typeof ProgramCreateWithoutImagesInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Images?: InstanceType<typeof ImagesListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
    participant?: InstanceType<typeof UserListRelationFilter>;
    category?: InstanceType<typeof ProgramCategoryRelationFilter>;
}
export declare class ProgramWhereInput {
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    dueDate?: InstanceType<typeof DateTimeNullableFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    categoryId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Images?: InstanceType<typeof ImagesListRelationFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
    participant?: InstanceType<typeof UserListRelationFilter>;
    category?: InstanceType<typeof ProgramCategoryRelationFilter>;
}
export declare class Program {
    id: number;
    name: string;
    startDate: Date;
    dueDate: Date | null;
    description: string;
    createdById: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    Images?: Array<Images>;
    createdBy?: InstanceType<typeof User>;
    participant?: Array<User>;
    category?: InstanceType<typeof ProgramCategory>;
    _count?: InstanceType<typeof ProgramCount>;
}
export declare class UpdateManyProgramArgs {
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class UpdateOneProgramArgs {
    data: InstanceType<typeof ProgramUpdateInput>;
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateInput>;
    update: InstanceType<typeof ProgramUpdateInput>;
}
export declare class AggregateProgramCategory {
    _count?: InstanceType<typeof ProgramCategoryCountAggregate>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregate>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregate>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregate>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregate>;
}
export declare class CreateManyProgramCategoryArgs {
    data: Array<ProgramCategoryCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryCreateInput>;
}
export declare class DeleteManyProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class DeleteOneProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class FindFirstProgramCategoryOrThrowArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindFirstProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindManyProgramCategoryArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
export declare class FindUniqueProgramCategoryOrThrowArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class ProgramCategoryAggregateArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCategoryCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregateInput>;
}
export declare class ProgramCategoryAvgAggregateInput {
    id?: true;
}
export declare class ProgramCategoryAvgAggregate {
    id?: number;
}
export declare class ProgramCategoryAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProgramCategoryCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProgramCategoryCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProgramCategoryCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryCount {
    programs?: number;
}
export declare class ProgramCategoryCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryCreateNestedOneWithoutProgramsInput {
    create?: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCategoryCreateOrConnectWithoutProgramsInput>;
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class ProgramCategoryCreateOrConnectWithoutProgramsInput {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
}
export declare class ProgramCategoryCreateWithoutProgramsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: InstanceType<typeof ProgramCreateNestedManyWithoutCategoryInput>;
}
export declare class ProgramCategoryGroupByArgs {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    orderBy?: Array<ProgramCategoryOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
    having?: InstanceType<typeof ProgramCategoryScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCategoryCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregateInput>;
}
export declare class ProgramCategoryGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProgramCategoryCountAggregate>;
    _avg?: InstanceType<typeof ProgramCategoryAvgAggregate>;
    _sum?: InstanceType<typeof ProgramCategorySumAggregate>;
    _min?: InstanceType<typeof ProgramCategoryMinAggregate>;
    _max?: InstanceType<typeof ProgramCategoryMaxAggregate>;
}
export declare class ProgramCategoryMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramCategoryMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProgramCategoryMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProgramCategoryOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProgramCategoryCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramCategoryAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramCategoryMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramCategoryMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramCategorySumOrderByAggregateInput>;
}
export declare class ProgramCategoryOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    programs?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
}
export declare class ProgramCategoryRelationFilter {
    is?: InstanceType<typeof ProgramCategoryWhereInput>;
    isNot?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class ProgramCategoryScalarWhereWithAggregatesInput {
    AND?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramCategoryScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProgramCategorySumAggregateInput {
    id?: true;
}
export declare class ProgramCategorySumAggregate {
    id?: number;
}
export declare class ProgramCategorySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProgramCategoryUncheckedCreateWithoutProgramsInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProgramCategoryUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCategoryInput>;
}
export declare class ProgramCategoryUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUncheckedUpdateWithoutProgramsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programs?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCategoryNestedInput>;
}
export declare class ProgramCategoryUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput {
    create?: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCategoryCreateOrConnectWithoutProgramsInput>;
    upsert?: InstanceType<typeof ProgramCategoryUpsertWithoutProgramsInput>;
    connect?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput>;
}
export declare class ProgramCategoryUpdateToOneWithWhereWithoutProgramsInput {
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
    data: InstanceType<typeof ProgramCategoryUpdateWithoutProgramsInput>;
}
export declare class ProgramCategoryUpdateWithoutProgramsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramCategoryUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    programs?: InstanceType<typeof ProgramUpdateManyWithoutCategoryNestedInput>;
}
export declare class ProgramCategoryUpsertWithoutProgramsInput {
    update: InstanceType<typeof ProgramCategoryUpdateWithoutProgramsInput>;
    create: InstanceType<typeof ProgramCategoryCreateWithoutProgramsInput>;
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class ProgramCategoryWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramCategoryWhereInput>;
    OR?: Array<ProgramCategoryWhereInput>;
    NOT?: Array<ProgramCategoryWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramCategoryWhereInput {
    AND?: Array<ProgramCategoryWhereInput>;
    OR?: Array<ProgramCategoryWhereInput>;
    NOT?: Array<ProgramCategoryWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramCategory {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    programs?: Array<Program>;
    _count?: InstanceType<typeof ProgramCategoryCount>;
}
export declare class UpdateManyProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramCategoryWhereInput>;
}
export declare class UpdateOneProgramCategoryArgs {
    data: InstanceType<typeof ProgramCategoryUpdateInput>;
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProgramCategoryArgs {
    where: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCategoryCreateInput>;
    update: InstanceType<typeof ProgramCategoryUpdateInput>;
}
export declare class AggregateProject {
    _count?: InstanceType<typeof ProjectCountAggregate>;
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    _min?: InstanceType<typeof ProjectMinAggregate>;
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}
export declare class CreateManyProjectArgs {
    data: Array<ProjectCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProjectArgs {
    data: InstanceType<typeof ProjectCreateInput>;
}
export declare class DeleteManyProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class DeleteOneProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindFirstProjectOrThrowArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindFirstProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindManyProjectArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
export declare class FindUniqueProjectOrThrowArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class FindUniqueProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectAggregateArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}
export declare class ProjectAvgAggregateInput {
    id?: true;
    returnRate?: true;
    goalAmount?: true;
    maxGoalAmountVersion?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    maxInvestorVersion?: true;
    accountId?: true;
}
export declare class ProjectAvgAggregate {
    id?: number;
    returnRate?: number;
    goalAmount?: number;
    maxGoalAmountVersion?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    maxInvestorVersion?: number;
    accountId?: number;
}
export declare class ProjectAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class ProjectCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    maxGoalAmountVersion?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    maxInvestorVersion?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ProjectCountAggregate {
    id: number;
    name: number;
    description: number;
    projectCategory: number;
    startDate: number;
    endDate: number;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion: number;
    accountId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ProjectCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectCount {
    images?: number;
    orderCart?: number;
}
export declare class ProjectCreateManyInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectCreateNestedOneWithoutOrderCartInput {
    create?: InstanceType<typeof ProjectCreateWithoutOrderCartInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutOrderCartInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutAccountInput>;
}
export declare class ProjectCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutImagesInput>;
}
export declare class ProjectCreateOrConnectWithoutOrderCartInput {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateWithoutOrderCartInput>;
}
export declare class ProjectCreateWithoutAccountInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    orderCart?: InstanceType<typeof CartCreateNestedManyWithoutProjectItemInput>;
}
export declare class ProjectCreateWithoutImagesInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderCart?: InstanceType<typeof CartCreateNestedManyWithoutProjectItemInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectCreateWithoutOrderCartInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectCreateInput {
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutProjectImageInput>;
    orderCart?: InstanceType<typeof CartCreateNestedManyWithoutProjectItemInput>;
    account: InstanceType<typeof AccountCreateNestedOneWithoutProjectInput>;
}
export declare class ProjectGroupByArgs {
    where?: InstanceType<typeof ProjectWhereInput>;
    orderBy?: Array<ProjectOrderByWithAggregationInput>;
    by: Array<keyof typeof ProjectScalarFieldEnum>;
    having?: InstanceType<typeof ProjectScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}
export declare class ProjectGroupBy {
    id: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    accountId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ProjectCountAggregate>;
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    _min?: InstanceType<typeof ProjectMinAggregate>;
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}
export declare class ProjectMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    maxGoalAmountVersion?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    maxInvestorVersion?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProjectMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    projectCategory?: keyof typeof ProjectCategory;
    startDate?: Date | string;
    endDate?: Date | string;
    returnRate?: number;
    goalAmount?: number;
    maxGoalAmountVersion?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    maxInvestorVersion?: number;
    accountId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    projectCategory?: true;
    startDate?: true;
    endDate?: true;
    returnRate?: true;
    goalAmount?: true;
    maxGoalAmountVersion?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    maxInvestorVersion?: true;
    accountId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ProjectMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    projectCategory?: keyof typeof ProjectCategory;
    startDate?: Date | string;
    endDate?: Date | string;
    returnRate?: number;
    goalAmount?: number;
    maxGoalAmountVersion?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    maxInvestorVersion?: number;
    accountId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ProjectMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ProjectNullableRelationFilter {
    is?: InstanceType<typeof ProjectWhereInput>;
    isNot?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: InstanceType<typeof SortOrderInput>;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: InstanceType<typeof SortOrderInput>;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProjectCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProjectAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProjectMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProjectMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProjectSumOrderByAggregateInput>;
}
export declare class ProjectOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    projectCategory?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: InstanceType<typeof SortOrderInput>;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: InstanceType<typeof SortOrderInput>;
    accountId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    orderCart?: InstanceType<typeof CartOrderByRelationAggregateInput>;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
}
export declare class ProjectScalarWhereWithAggregatesInput {
    AND?: Array<ProjectScalarWhereWithAggregatesInput>;
    OR?: Array<ProjectScalarWhereWithAggregatesInput>;
    NOT?: Array<ProjectScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    endDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    returnRate?: InstanceType<typeof FloatWithAggregatesFilter>;
    goalAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
    maxGoalAmountVersion?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    minimumInvestment?: InstanceType<typeof FloatWithAggregatesFilter>;
    maxInvestor?: InstanceType<typeof IntWithAggregatesFilter>;
    maxInvestorVersion?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ProjectSumAggregateInput {
    id?: true;
    returnRate?: true;
    goalAmount?: true;
    maxGoalAmountVersion?: true;
    minimumInvestment?: true;
    maxInvestor?: true;
    maxInvestorVersion?: true;
    accountId?: true;
}
export declare class ProjectSumAggregate {
    id?: number;
    returnRate?: number;
    goalAmount?: number;
    maxGoalAmountVersion?: number;
    minimumInvestment?: number;
    maxInvestor?: number;
    maxInvestorVersion?: number;
    accountId?: number;
}
export declare class ProjectSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    returnRate?: keyof typeof SortOrder;
    goalAmount?: keyof typeof SortOrder;
    maxGoalAmountVersion?: keyof typeof SortOrder;
    minimumInvestment?: keyof typeof SortOrder;
    maxInvestor?: keyof typeof SortOrder;
    maxInvestorVersion?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class ProjectUncheckedCreateNestedOneWithoutAccountInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class ProjectUncheckedCreateWithoutAccountInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
    orderCart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutProjectItemInput>;
}
export declare class ProjectUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderCart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutProjectItemInput>;
}
export declare class ProjectUncheckedCreateWithoutOrderCartInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
}
export declare class ProjectUncheckedCreateInput {
    id?: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date | string;
    endDate: Date | string;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion?: number;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion?: number;
    accountId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutProjectImageInput>;
    orderCart?: InstanceType<typeof CartUncheckedCreateNestedManyWithoutProjectItemInput>;
}
export declare class ProjectUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProjectUncheckedUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class ProjectUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
    orderCart?: InstanceType<typeof CartUncheckedUpdateManyWithoutProjectItemNestedInput>;
}
export declare class ProjectUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderCart?: InstanceType<typeof CartUncheckedUpdateManyWithoutProjectItemNestedInput>;
}
export declare class ProjectUncheckedUpdateWithoutOrderCartInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
}
export declare class ProjectUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutProjectImageNestedInput>;
    orderCart?: InstanceType<typeof CartUncheckedUpdateManyWithoutProjectItemNestedInput>;
}
export declare class ProjectUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ProjectUpdateOneWithoutAccountNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutAccountInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutAccountInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutAccountInput>;
}
export declare class ProjectUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class ProjectUpdateOneWithoutOrderCartNestedInput {
    create?: InstanceType<typeof ProjectCreateWithoutOrderCartInput>;
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutOrderCartInput>;
    upsert?: InstanceType<typeof ProjectUpsertWithoutOrderCartInput>;
    disconnect?: InstanceType<typeof ProjectWhereInput>;
    delete?: InstanceType<typeof ProjectWhereInput>;
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    update?: InstanceType<typeof ProjectUpdateToOneWithWhereWithoutOrderCartInput>;
}
export declare class ProjectUpdateToOneWithWhereWithoutAccountInput {
    where?: InstanceType<typeof ProjectWhereInput>;
    data: InstanceType<typeof ProjectUpdateWithoutAccountInput>;
}
export declare class ProjectUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof ProjectWhereInput>;
    data: InstanceType<typeof ProjectUpdateWithoutImagesInput>;
}
export declare class ProjectUpdateToOneWithWhereWithoutOrderCartInput {
    where?: InstanceType<typeof ProjectWhereInput>;
    data: InstanceType<typeof ProjectUpdateWithoutOrderCartInput>;
}
export declare class ProjectUpdateWithoutAccountInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    orderCart?: InstanceType<typeof CartUpdateManyWithoutProjectItemNestedInput>;
}
export declare class ProjectUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    orderCart?: InstanceType<typeof CartUpdateManyWithoutProjectItemNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpdateWithoutOrderCartInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    returnRate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    goalAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxGoalAmountVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    minimumInvestment?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    maxInvestor?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    maxInvestorVersion?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutProjectImageNestedInput>;
    orderCart?: InstanceType<typeof CartUpdateManyWithoutProjectItemNestedInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutProjectNestedInput>;
}
export declare class ProjectUpsertWithoutAccountInput {
    update: InstanceType<typeof ProjectUpdateWithoutAccountInput>;
    create: InstanceType<typeof ProjectCreateWithoutAccountInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectUpsertWithoutImagesInput {
    update: InstanceType<typeof ProjectUpdateWithoutImagesInput>;
    create: InstanceType<typeof ProjectCreateWithoutImagesInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectUpsertWithoutOrderCartInput {
    update: InstanceType<typeof ProjectUpdateWithoutOrderCartInput>;
    create: InstanceType<typeof ProjectCreateWithoutOrderCartInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class ProjectWhereUniqueInput {
    id?: number;
    accountId?: number;
    AND?: Array<ProjectWhereInput>;
    OR?: Array<ProjectWhereInput>;
    NOT?: Array<ProjectWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    returnRate?: InstanceType<typeof FloatFilter>;
    goalAmount?: InstanceType<typeof FloatFilter>;
    maxGoalAmountVersion?: InstanceType<typeof IntNullableFilter>;
    minimumInvestment?: InstanceType<typeof FloatFilter>;
    maxInvestor?: InstanceType<typeof IntFilter>;
    maxInvestorVersion?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    orderCart?: InstanceType<typeof CartListRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class ProjectWhereInput {
    AND?: Array<ProjectWhereInput>;
    OR?: Array<ProjectWhereInput>;
    NOT?: Array<ProjectWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    projectCategory?: InstanceType<typeof EnumProjectCategoryFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    returnRate?: InstanceType<typeof FloatFilter>;
    goalAmount?: InstanceType<typeof FloatFilter>;
    maxGoalAmountVersion?: InstanceType<typeof IntNullableFilter>;
    minimumInvestment?: InstanceType<typeof FloatFilter>;
    maxInvestor?: InstanceType<typeof IntFilter>;
    maxInvestorVersion?: InstanceType<typeof IntNullableFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    orderCart?: InstanceType<typeof CartListRelationFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class Project {
    id: number;
    name: string;
    description: string;
    projectCategory: keyof typeof ProjectCategory;
    startDate: Date;
    endDate: Date;
    returnRate: number;
    goalAmount: number;
    maxGoalAmountVersion: number | null;
    minimumInvestment: number;
    maxInvestor: number;
    maxInvestorVersion: number | null;
    accountId: number;
    createdAt: Date;
    updatedAt: Date;
    images?: Array<Images>;
    orderCart?: Array<Cart>;
    account?: InstanceType<typeof Account>;
    _count?: InstanceType<typeof ProjectCount>;
}
export declare class UpdateManyProjectArgs {
    data: InstanceType<typeof ProjectUpdateManyMutationInput>;
    where?: InstanceType<typeof ProjectWhereInput>;
}
export declare class UpdateOneProjectArgs {
    data: InstanceType<typeof ProjectUpdateInput>;
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
}
export declare class UpsertOneProjectArgs {
    where: Prisma.AtLeast<ProjectWhereUniqueInput, 'id' | 'accountId'>;
    create: InstanceType<typeof ProjectCreateInput>;
    update: InstanceType<typeof ProjectUpdateInput>;
}
export declare class AggregateProvince {
    _count?: InstanceType<typeof ProvinceCountAggregate>;
    _avg?: InstanceType<typeof ProvinceAvgAggregate>;
    _sum?: InstanceType<typeof ProvinceSumAggregate>;
    _min?: InstanceType<typeof ProvinceMinAggregate>;
    _max?: InstanceType<typeof ProvinceMaxAggregate>;
}
export declare class CreateManyProvinceArgs {
    data: Array<ProvinceCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProvinceArgs {
    data: InstanceType<typeof ProvinceCreateInput>;
}
export declare class DeleteManyProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class DeleteOneProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindFirstProvinceOrThrowArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindFirstProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindManyProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindUniqueProvinceOrThrowArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindUniqueProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class ProvinceAggregateArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProvinceCountAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxAggregateInput>;
}
export declare class ProvinceAvgAggregateInput {
    id?: true;
}
export declare class ProvinceAvgAggregate {
    id?: number;
}
export declare class ProvinceAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProvinceCountAggregateInput {
    id?: true;
    name?: true;
    _all?: true;
}
export declare class ProvinceCountAggregate {
    id: number;
    name: number;
    _all: number;
}
export declare class ProvinceCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceCount {
    cities?: number;
}
export declare class ProvinceCreateManyInput {
    id?: number;
    name: string;
}
export declare class ProvinceCreateNestedOneWithoutCitiesInput {
    create?: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    connectOrCreate?: InstanceType<typeof ProvinceCreateOrConnectWithoutCitiesInput>;
    connect?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class ProvinceCreateOrConnectWithoutCitiesInput {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
}
export declare class ProvinceCreateWithoutCitiesInput {
    name: string;
}
export declare class ProvinceCreateInput {
    name: string;
    cities?: InstanceType<typeof CityCreateNestedManyWithoutProvinceInput>;
}
export declare class ProvinceGroupByArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithAggregationInput>;
    by: Array<keyof typeof ProvinceScalarFieldEnum>;
    having?: InstanceType<typeof ProvinceScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProvinceCountAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxAggregateInput>;
}
export declare class ProvinceGroupBy {
    id: number;
    name: string;
    _count?: InstanceType<typeof ProvinceCountAggregate>;
    _avg?: InstanceType<typeof ProvinceAvgAggregate>;
    _sum?: InstanceType<typeof ProvinceSumAggregate>;
    _min?: InstanceType<typeof ProvinceMinAggregate>;
    _max?: InstanceType<typeof ProvinceMaxAggregate>;
}
export declare class ProvinceMaxAggregateInput {
    id?: true;
    name?: true;
}
export declare class ProvinceMaxAggregate {
    id?: number;
    name?: string;
}
export declare class ProvinceMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceMinAggregateInput {
    id?: true;
    name?: true;
}
export declare class ProvinceMinAggregate {
    id?: number;
    name?: string;
}
export declare class ProvinceMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProvinceCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumOrderByAggregateInput>;
}
export declare class ProvinceOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cities?: InstanceType<typeof CityOrderByRelationAggregateInput>;
}
export declare class ProvinceRelationFilter {
    is?: InstanceType<typeof ProvinceWhereInput>;
    isNot?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class ProvinceScalarWhereWithAggregatesInput {
    AND?: Array<ProvinceScalarWhereWithAggregatesInput>;
    OR?: Array<ProvinceScalarWhereWithAggregatesInput>;
    NOT?: Array<ProvinceScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class ProvinceSumAggregateInput {
    id?: true;
}
export declare class ProvinceSumAggregate {
    id?: number;
}
export declare class ProvinceSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProvinceUncheckedCreateWithoutCitiesInput {
    id?: number;
    name: string;
}
export declare class ProvinceUncheckedCreateInput {
    id?: number;
    name: string;
    cities?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutProvinceInput>;
}
export declare class ProvinceUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUncheckedUpdateWithoutCitiesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cities?: InstanceType<typeof CityUncheckedUpdateManyWithoutProvinceNestedInput>;
}
export declare class ProvinceUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUpdateOneRequiredWithoutCitiesNestedInput {
    create?: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    connectOrCreate?: InstanceType<typeof ProvinceCreateOrConnectWithoutCitiesInput>;
    upsert?: InstanceType<typeof ProvinceUpsertWithoutCitiesInput>;
    connect?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof ProvinceUpdateToOneWithWhereWithoutCitiesInput>;
}
export declare class ProvinceUpdateToOneWithWhereWithoutCitiesInput {
    where?: InstanceType<typeof ProvinceWhereInput>;
    data: InstanceType<typeof ProvinceUpdateWithoutCitiesInput>;
}
export declare class ProvinceUpdateWithoutCitiesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cities?: InstanceType<typeof CityUpdateManyWithoutProvinceNestedInput>;
}
export declare class ProvinceUpsertWithoutCitiesInput {
    update: InstanceType<typeof ProvinceUpdateWithoutCitiesInput>;
    create: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class ProvinceWhereUniqueInput {
    id?: number;
    name?: string;
    AND?: Array<ProvinceWhereInput>;
    OR?: Array<ProvinceWhereInput>;
    NOT?: Array<ProvinceWhereInput>;
    cities?: InstanceType<typeof CityListRelationFilter>;
}
export declare class ProvinceWhereInput {
    AND?: Array<ProvinceWhereInput>;
    OR?: Array<ProvinceWhereInput>;
    NOT?: Array<ProvinceWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cities?: InstanceType<typeof CityListRelationFilter>;
}
export declare class Province {
    id: number;
    name: string;
    cities?: Array<City>;
    _count?: InstanceType<typeof ProvinceCount>;
}
export declare class UpdateManyProvinceArgs {
    data: InstanceType<typeof ProvinceUpdateManyMutationInput>;
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class UpdateOneProvinceArgs {
    data: InstanceType<typeof ProvinceUpdateInput>;
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpsertOneProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof ProvinceCreateInput>;
    update: InstanceType<typeof ProvinceUpdateInput>;
}
export declare class AggregateReward {
    _count?: InstanceType<typeof RewardCountAggregate>;
    _avg?: InstanceType<typeof RewardAvgAggregate>;
    _sum?: InstanceType<typeof RewardSumAggregate>;
    _min?: InstanceType<typeof RewardMinAggregate>;
    _max?: InstanceType<typeof RewardMaxAggregate>;
}
export declare class CreateManyRewardArgs {
    data: Array<RewardCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRewardArgs {
    data: InstanceType<typeof RewardCreateInput>;
}
export declare class DeleteManyRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class DeleteOneRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class FindFirstRewardOrThrowArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindFirstRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindManyRewardArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
export declare class FindUniqueRewardOrThrowArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class RewardAggregateArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardCountAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardSumAggregateInput>;
    _min?: InstanceType<typeof RewardMinAggregateInput>;
    _max?: InstanceType<typeof RewardMaxAggregateInput>;
}
export declare class RewardAvgAggregateInput {
    id?: true;
    pointCost?: true;
}
export declare class RewardAvgAggregate {
    id?: number;
    pointCost?: number;
}
export declare class RewardAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
}
export declare class RewardCountAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class RewardCountAggregate {
    id: number;
    name: number;
    pointCost: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class RewardCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardCount {
    images?: number;
    RewardClaim?: number;
}
export declare class RewardCreateManyInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardCreateNestedOneWithoutImagesInput {
    create?: InstanceType<typeof RewardCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutImagesInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class RewardCreateNestedOneWithoutRewardClaimInput {
    create?: InstanceType<typeof RewardCreateWithoutRewardClaimInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutRewardClaimInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class RewardCreateOrConnectWithoutImagesInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateWithoutImagesInput>;
}
export declare class RewardCreateOrConnectWithoutRewardClaimInput {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateWithoutRewardClaimInput>;
}
export declare class RewardCreateWithoutImagesInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    RewardClaim?: InstanceType<typeof RewardClaimCreateNestedManyWithoutRewardInput>;
}
export declare class RewardCreateWithoutRewardClaimInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutRewardImageInput>;
}
export declare class RewardCreateInput {
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesCreateNestedManyWithoutRewardImageInput>;
    RewardClaim?: InstanceType<typeof RewardClaimCreateNestedManyWithoutRewardInput>;
}
export declare class RewardGroupByArgs {
    where?: InstanceType<typeof RewardWhereInput>;
    orderBy?: Array<RewardOrderByWithAggregationInput>;
    by: Array<keyof typeof RewardScalarFieldEnum>;
    having?: InstanceType<typeof RewardScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardCountAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardSumAggregateInput>;
    _min?: InstanceType<typeof RewardMinAggregateInput>;
    _max?: InstanceType<typeof RewardMaxAggregateInput>;
}
export declare class RewardGroupBy {
    id: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof RewardCountAggregate>;
    _avg?: InstanceType<typeof RewardAvgAggregate>;
    _sum?: InstanceType<typeof RewardSumAggregate>;
    _min?: InstanceType<typeof RewardMinAggregate>;
    _max?: InstanceType<typeof RewardMaxAggregate>;
}
export declare class RewardMaxAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RewardMaxAggregate {
    id?: number;
    name?: string;
    pointCost?: number;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardMinAggregateInput {
    id?: true;
    name?: true;
    pointCost?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RewardMinAggregate {
    id?: number;
    name?: string;
    pointCost?: number;
    description?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RewardMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RewardNullableRelationFilter {
    is?: InstanceType<typeof RewardWhereInput>;
    isNot?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RewardCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RewardAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RewardMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RewardMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RewardSumOrderByAggregateInput>;
}
export declare class RewardOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
    RewardClaim?: InstanceType<typeof RewardClaimOrderByRelationAggregateInput>;
}
export declare class RewardRelationFilter {
    is?: InstanceType<typeof RewardWhereInput>;
    isNot?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardScalarWhereWithAggregatesInput {
    AND?: Array<RewardScalarWhereWithAggregatesInput>;
    OR?: Array<RewardScalarWhereWithAggregatesInput>;
    NOT?: Array<RewardScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    pointCost?: InstanceType<typeof FloatWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class RewardSumAggregateInput {
    id?: true;
    pointCost?: true;
}
export declare class RewardSumAggregate {
    id?: number;
    pointCost?: number;
}
export declare class RewardSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    pointCost?: keyof typeof SortOrder;
}
export declare class RewardUncheckedCreateWithoutImagesInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    RewardClaim?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutRewardInput>;
}
export declare class RewardUncheckedCreateWithoutRewardClaimInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutRewardImageInput>;
}
export declare class RewardUncheckedCreateInput {
    id?: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutRewardImageInput>;
    RewardClaim?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutRewardInput>;
}
export declare class RewardUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardUncheckedUpdateWithoutImagesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    RewardClaim?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutRewardNestedInput>;
}
export declare class RewardUncheckedUpdateWithoutRewardClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutRewardImageNestedInput>;
}
export declare class RewardUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutRewardImageNestedInput>;
    RewardClaim?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutRewardNestedInput>;
}
export declare class RewardUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardUpdateOneRequiredWithoutRewardClaimNestedInput {
    create?: InstanceType<typeof RewardCreateWithoutRewardClaimInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutRewardClaimInput>;
    upsert?: InstanceType<typeof RewardUpsertWithoutRewardClaimInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RewardUpdateToOneWithWhereWithoutRewardClaimInput>;
}
export declare class RewardUpdateOneWithoutImagesNestedInput {
    create?: InstanceType<typeof RewardCreateWithoutImagesInput>;
    connectOrCreate?: InstanceType<typeof RewardCreateOrConnectWithoutImagesInput>;
    upsert?: InstanceType<typeof RewardUpsertWithoutImagesInput>;
    disconnect?: InstanceType<typeof RewardWhereInput>;
    delete?: InstanceType<typeof RewardWhereInput>;
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RewardUpdateToOneWithWhereWithoutImagesInput>;
}
export declare class RewardUpdateToOneWithWhereWithoutImagesInput {
    where?: InstanceType<typeof RewardWhereInput>;
    data: InstanceType<typeof RewardUpdateWithoutImagesInput>;
}
export declare class RewardUpdateToOneWithWhereWithoutRewardClaimInput {
    where?: InstanceType<typeof RewardWhereInput>;
    data: InstanceType<typeof RewardUpdateWithoutRewardClaimInput>;
}
export declare class RewardUpdateWithoutImagesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    RewardClaim?: InstanceType<typeof RewardClaimUpdateManyWithoutRewardNestedInput>;
}
export declare class RewardUpdateWithoutRewardClaimInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutRewardImageNestedInput>;
}
export declare class RewardUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    pointCost?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    images?: InstanceType<typeof ImagesUpdateManyWithoutRewardImageNestedInput>;
    RewardClaim?: InstanceType<typeof RewardClaimUpdateManyWithoutRewardNestedInput>;
}
export declare class RewardUpsertWithoutImagesInput {
    update: InstanceType<typeof RewardUpdateWithoutImagesInput>;
    create: InstanceType<typeof RewardCreateWithoutImagesInput>;
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardUpsertWithoutRewardClaimInput {
    update: InstanceType<typeof RewardUpdateWithoutRewardClaimInput>;
    create: InstanceType<typeof RewardCreateWithoutRewardClaimInput>;
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class RewardWhereUniqueInput {
    id?: number;
    AND?: Array<RewardWhereInput>;
    OR?: Array<RewardWhereInput>;
    NOT?: Array<RewardWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    pointCost?: InstanceType<typeof FloatFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    RewardClaim?: InstanceType<typeof RewardClaimListRelationFilter>;
}
export declare class RewardWhereInput {
    AND?: Array<RewardWhereInput>;
    OR?: Array<RewardWhereInput>;
    NOT?: Array<RewardWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    pointCost?: InstanceType<typeof FloatFilter>;
    description?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    images?: InstanceType<typeof ImagesListRelationFilter>;
    RewardClaim?: InstanceType<typeof RewardClaimListRelationFilter>;
}
export declare class Reward {
    id: number;
    name: string;
    pointCost: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    images?: Array<Images>;
    RewardClaim?: Array<RewardClaim>;
    _count?: InstanceType<typeof RewardCount>;
}
export declare class UpdateManyRewardArgs {
    data: InstanceType<typeof RewardUpdateManyMutationInput>;
    where?: InstanceType<typeof RewardWhereInput>;
}
export declare class UpdateOneRewardArgs {
    data: InstanceType<typeof RewardUpdateInput>;
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRewardArgs {
    where: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardCreateInput>;
    update: InstanceType<typeof RewardUpdateInput>;
}
export declare class AggregateRewardClaim {
    _count?: InstanceType<typeof RewardClaimCountAggregate>;
    _avg?: InstanceType<typeof RewardClaimAvgAggregate>;
    _sum?: InstanceType<typeof RewardClaimSumAggregate>;
    _min?: InstanceType<typeof RewardClaimMinAggregate>;
    _max?: InstanceType<typeof RewardClaimMaxAggregate>;
}
export declare class CreateManyRewardClaimArgs {
    data: Array<RewardClaimCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRewardClaimArgs {
    data: InstanceType<typeof RewardClaimCreateInput>;
}
export declare class DeleteManyRewardClaimArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
}
export declare class DeleteOneRewardClaimArgs {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
export declare class FindFirstRewardClaimOrThrowArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
    orderBy?: Array<RewardClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardClaimScalarFieldEnum>;
}
export declare class FindFirstRewardClaimArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
    orderBy?: Array<RewardClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardClaimScalarFieldEnum>;
}
export declare class FindManyRewardClaimArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
    orderBy?: Array<RewardClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RewardClaimScalarFieldEnum>;
}
export declare class FindUniqueRewardClaimOrThrowArgs {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRewardClaimArgs {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
export declare class RewardClaimAggregateArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
    orderBy?: Array<RewardClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardClaimCountAggregateInput>;
    _avg?: InstanceType<typeof RewardClaimAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardClaimSumAggregateInput>;
    _min?: InstanceType<typeof RewardClaimMinAggregateInput>;
    _max?: InstanceType<typeof RewardClaimMaxAggregateInput>;
}
export declare class RewardClaimAvgAggregateInput {
    id?: true;
    rewardId?: true;
}
export declare class RewardClaimAvgAggregate {
    id?: number;
    rewardId?: number;
}
export declare class RewardClaimAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
}
export declare class RewardClaimCountAggregateInput {
    id?: true;
    userId?: true;
    rewardId?: true;
    processedAt?: true;
    createdAt?: true;
    _all?: true;
}
export declare class RewardClaimCountAggregate {
    id: number;
    userId: number;
    rewardId: number;
    processedAt: number;
    createdAt: number;
    _all: number;
}
export declare class RewardClaimCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
    processedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class RewardClaimCreateManyRewardInputEnvelope {
    data: Array<RewardClaimCreateManyRewardInput>;
    skipDuplicates?: boolean;
}
export declare class RewardClaimCreateManyRewardInput {
    id?: number;
    userId: string;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimCreateManyUserInputEnvelope {
    data: Array<RewardClaimCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class RewardClaimCreateManyUserInput {
    id?: number;
    rewardId: number;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimCreateManyInput {
    id?: number;
    userId: string;
    rewardId: number;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimCreateNestedManyWithoutRewardInput {
    create?: Array<RewardClaimCreateWithoutRewardInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutRewardInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyRewardInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
}
export declare class RewardClaimCreateNestedManyWithoutUserInput {
    create?: Array<RewardClaimCreateWithoutUserInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
}
export declare class RewardClaimCreateOrConnectWithoutRewardInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardClaimCreateWithoutRewardInput>;
}
export declare class RewardClaimCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardClaimCreateWithoutUserInput>;
}
export declare class RewardClaimCreateWithoutRewardInput {
    processedAt: Date | string;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutClaimedRewardsInput>;
}
export declare class RewardClaimCreateWithoutUserInput {
    processedAt: Date | string;
    createdAt?: Date | string;
    reward: InstanceType<typeof RewardCreateNestedOneWithoutRewardClaimInput>;
}
export declare class RewardClaimCreateInput {
    processedAt: Date | string;
    createdAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutClaimedRewardsInput>;
    reward: InstanceType<typeof RewardCreateNestedOneWithoutRewardClaimInput>;
}
export declare class RewardClaimGroupByArgs {
    where?: InstanceType<typeof RewardClaimWhereInput>;
    orderBy?: Array<RewardClaimOrderByWithAggregationInput>;
    by: Array<keyof typeof RewardClaimScalarFieldEnum>;
    having?: InstanceType<typeof RewardClaimScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RewardClaimCountAggregateInput>;
    _avg?: InstanceType<typeof RewardClaimAvgAggregateInput>;
    _sum?: InstanceType<typeof RewardClaimSumAggregateInput>;
    _min?: InstanceType<typeof RewardClaimMinAggregateInput>;
    _max?: InstanceType<typeof RewardClaimMaxAggregateInput>;
}
export declare class RewardClaimGroupBy {
    id: number;
    userId: string;
    rewardId: number;
    processedAt: Date | string;
    createdAt: Date | string;
    _count?: InstanceType<typeof RewardClaimCountAggregate>;
    _avg?: InstanceType<typeof RewardClaimAvgAggregate>;
    _sum?: InstanceType<typeof RewardClaimSumAggregate>;
    _min?: InstanceType<typeof RewardClaimMinAggregate>;
    _max?: InstanceType<typeof RewardClaimMaxAggregate>;
}
export declare class RewardClaimListRelationFilter {
    every?: InstanceType<typeof RewardClaimWhereInput>;
    some?: InstanceType<typeof RewardClaimWhereInput>;
    none?: InstanceType<typeof RewardClaimWhereInput>;
}
export declare class RewardClaimMaxAggregateInput {
    id?: true;
    userId?: true;
    rewardId?: true;
    processedAt?: true;
    createdAt?: true;
}
export declare class RewardClaimMaxAggregate {
    id?: number;
    userId?: string;
    rewardId?: number;
    processedAt?: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
    processedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class RewardClaimMinAggregateInput {
    id?: true;
    userId?: true;
    rewardId?: true;
    processedAt?: true;
    createdAt?: true;
}
export declare class RewardClaimMinAggregate {
    id?: number;
    userId?: string;
    rewardId?: number;
    processedAt?: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
    processedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class RewardClaimOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class RewardClaimOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
    processedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RewardClaimCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RewardClaimAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RewardClaimMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RewardClaimMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RewardClaimSumOrderByAggregateInput>;
}
export declare class RewardClaimOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
    processedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    reward?: InstanceType<typeof RewardOrderByWithRelationInput>;
}
export declare class RewardClaimScalarWhereWithAggregatesInput {
    AND?: Array<RewardClaimScalarWhereWithAggregatesInput>;
    OR?: Array<RewardClaimScalarWhereWithAggregatesInput>;
    NOT?: Array<RewardClaimScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    rewardId?: InstanceType<typeof IntWithAggregatesFilter>;
    processedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class RewardClaimScalarWhereInput {
    AND?: Array<RewardClaimScalarWhereInput>;
    OR?: Array<RewardClaimScalarWhereInput>;
    NOT?: Array<RewardClaimScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    rewardId?: InstanceType<typeof IntFilter>;
    processedAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class RewardClaimSumAggregateInput {
    id?: true;
    rewardId?: true;
}
export declare class RewardClaimSumAggregate {
    id?: number;
    rewardId?: number;
}
export declare class RewardClaimSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    rewardId?: keyof typeof SortOrder;
}
export declare class RewardClaimUncheckedCreateNestedManyWithoutRewardInput {
    create?: Array<RewardClaimCreateWithoutRewardInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutRewardInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyRewardInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
}
export declare class RewardClaimUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<RewardClaimCreateWithoutUserInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
}
export declare class RewardClaimUncheckedCreateWithoutRewardInput {
    id?: number;
    userId: string;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimUncheckedCreateWithoutUserInput {
    id?: number;
    rewardId: number;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimUncheckedCreateInput {
    id?: number;
    userId: string;
    rewardId: number;
    processedAt: Date | string;
    createdAt?: Date | string;
}
export declare class RewardClaimUncheckedUpdateManyWithoutRewardNestedInput {
    create?: Array<RewardClaimCreateWithoutRewardInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutRewardInput>;
    upsert?: Array<RewardClaimUpsertWithWhereUniqueWithoutRewardInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyRewardInputEnvelope>;
    set?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    update?: Array<RewardClaimUpdateWithWhereUniqueWithoutRewardInput>;
    updateMany?: Array<RewardClaimUpdateManyWithWhereWithoutRewardInput>;
    deleteMany?: Array<RewardClaimScalarWhereInput>;
}
export declare class RewardClaimUncheckedUpdateManyWithoutRewardInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<RewardClaimCreateWithoutUserInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutUserInput>;
    upsert?: Array<RewardClaimUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    update?: Array<RewardClaimUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<RewardClaimUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<RewardClaimScalarWhereInput>;
}
export declare class RewardClaimUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    rewardId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rewardId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUncheckedUpdateWithoutRewardInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    rewardId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rewardId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUpdateManyMutationInput {
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RewardClaimUpdateManyWithWhereWithoutRewardInput {
    where: InstanceType<typeof RewardClaimScalarWhereInput>;
    data: InstanceType<typeof RewardClaimUpdateManyMutationInput>;
}
export declare class RewardClaimUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof RewardClaimScalarWhereInput>;
    data: InstanceType<typeof RewardClaimUpdateManyMutationInput>;
}
export declare class RewardClaimUpdateManyWithoutRewardNestedInput {
    create?: Array<RewardClaimCreateWithoutRewardInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutRewardInput>;
    upsert?: Array<RewardClaimUpsertWithWhereUniqueWithoutRewardInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyRewardInputEnvelope>;
    set?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    update?: Array<RewardClaimUpdateWithWhereUniqueWithoutRewardInput>;
    updateMany?: Array<RewardClaimUpdateManyWithWhereWithoutRewardInput>;
    deleteMany?: Array<RewardClaimScalarWhereInput>;
}
export declare class RewardClaimUpdateManyWithoutUserNestedInput {
    create?: Array<RewardClaimCreateWithoutUserInput>;
    connectOrCreate?: Array<RewardClaimCreateOrConnectWithoutUserInput>;
    upsert?: Array<RewardClaimUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof RewardClaimCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>>;
    update?: Array<RewardClaimUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<RewardClaimUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<RewardClaimScalarWhereInput>;
}
export declare class RewardClaimUpdateWithWhereUniqueWithoutRewardInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    data: InstanceType<typeof RewardClaimUpdateWithoutRewardInput>;
}
export declare class RewardClaimUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    data: InstanceType<typeof RewardClaimUpdateWithoutUserInput>;
}
export declare class RewardClaimUpdateWithoutRewardInput {
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimedRewardsNestedInput>;
}
export declare class RewardClaimUpdateWithoutUserInput {
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    reward?: InstanceType<typeof RewardUpdateOneRequiredWithoutRewardClaimNestedInput>;
}
export declare class RewardClaimUpdateInput {
    processedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimedRewardsNestedInput>;
    reward?: InstanceType<typeof RewardUpdateOneRequiredWithoutRewardClaimNestedInput>;
}
export declare class RewardClaimUpsertWithWhereUniqueWithoutRewardInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    update: InstanceType<typeof RewardClaimUpdateWithoutRewardInput>;
    create: InstanceType<typeof RewardClaimCreateWithoutRewardInput>;
}
export declare class RewardClaimUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    update: InstanceType<typeof RewardClaimUpdateWithoutUserInput>;
    create: InstanceType<typeof RewardClaimCreateWithoutUserInput>;
}
export declare class RewardClaimWhereUniqueInput {
    id?: number;
    AND?: Array<RewardClaimWhereInput>;
    OR?: Array<RewardClaimWhereInput>;
    NOT?: Array<RewardClaimWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    rewardId?: InstanceType<typeof IntFilter>;
    processedAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    reward?: InstanceType<typeof RewardRelationFilter>;
}
export declare class RewardClaimWhereInput {
    AND?: Array<RewardClaimWhereInput>;
    OR?: Array<RewardClaimWhereInput>;
    NOT?: Array<RewardClaimWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    rewardId?: InstanceType<typeof IntFilter>;
    processedAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    reward?: InstanceType<typeof RewardRelationFilter>;
}
export declare class RewardClaim {
    id: number;
    userId: string;
    rewardId: number;
    processedAt: Date;
    createdAt: Date;
    user?: InstanceType<typeof User>;
    reward?: InstanceType<typeof Reward>;
}
export declare class UpdateManyRewardClaimArgs {
    data: InstanceType<typeof RewardClaimUpdateManyMutationInput>;
    where?: InstanceType<typeof RewardClaimWhereInput>;
}
export declare class UpdateOneRewardClaimArgs {
    data: InstanceType<typeof RewardClaimUpdateInput>;
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRewardClaimArgs {
    where: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RewardClaimCreateInput>;
    update: InstanceType<typeof RewardClaimUpdateInput>;
}
export declare class AggregateSchool {
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _avg?: InstanceType<typeof SchoolAvgAggregate>;
    _sum?: InstanceType<typeof SchoolSumAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class CreateManySchoolArgs {
    data: Array<SchoolCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSchoolArgs {
    data: InstanceType<typeof SchoolCreateInput>;
}
export declare class DeleteManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class DeleteOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindFirstSchoolOrThrowArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindFirstSchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindUniqueSchoolOrThrowArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class FindUniqueSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolAggregateArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolAvgAggregateInput {
    id?: true;
    addressId?: true;
}
export declare class SchoolAvgAggregate {
    id?: number;
    addressId?: number;
}
export declare class SchoolAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class SchoolCountAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class SchoolCountAggregate {
    id: number;
    name: number;
    addressId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class SchoolCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolCount {
    students?: number;
}
export declare class SchoolCreateManyInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolCreateNestedOneWithoutStudentsInput {
    create?: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutStudentsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateWithoutAddressInput>;
}
export declare class SchoolCreateOrConnectWithoutStudentsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
}
export declare class SchoolCreateWithoutAddressInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutStudentsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutSchoolInput>;
}
export declare class SchoolCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutSchoolInput>;
    students?: InstanceType<typeof UserCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolGroupByArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithAggregationInput>;
    by: Array<keyof typeof SchoolScalarFieldEnum>;
    having?: InstanceType<typeof SchoolScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolGroupBy {
    id: number;
    name: string;
    addressId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _avg?: InstanceType<typeof SchoolAvgAggregate>;
    _sum?: InstanceType<typeof SchoolSumAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class SchoolMaxAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class SchoolMaxAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolMinAggregateInput {
    id?: true;
    name?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class SchoolMinAggregate {
    id?: number;
    name?: string;
    addressId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class SchoolNullableRelationFilter {
    is?: InstanceType<typeof SchoolWhereInput>;
    isNot?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SchoolCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SchoolAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SchoolMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SchoolSumOrderByAggregateInput>;
}
export declare class SchoolOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    students?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}
export declare class SchoolScalarWhereWithAggregatesInput {
    AND?: Array<SchoolScalarWhereWithAggregatesInput>;
    OR?: Array<SchoolScalarWhereWithAggregatesInput>;
    NOT?: Array<SchoolScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class SchoolSumAggregateInput {
    id?: true;
    addressId?: true;
}
export declare class SchoolSumAggregate {
    id?: number;
    addressId?: number;
}
export declare class SchoolSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class SchoolUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class SchoolUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutStudentsInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class SchoolUncheckedCreateInput {
    id?: number;
    name: string;
    addressId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    students?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SchoolUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutStudentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class SchoolUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SchoolUpdateOneWithoutStudentsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutStudentsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutStudentsInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutStudentsInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutAddressInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutStudentsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutStudentsInput>;
}
export declare class SchoolUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    students?: InstanceType<typeof UserUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutStudentsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutSchoolNestedInput>;
    students?: InstanceType<typeof UserUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpsertWithoutAddressInput {
    update: InstanceType<typeof SchoolUpdateWithoutAddressInput>;
    create: InstanceType<typeof SchoolCreateWithoutAddressInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutStudentsInput {
    update: InstanceType<typeof SchoolUpdateWithoutStudentsInput>;
    create: InstanceType<typeof SchoolCreateWithoutStudentsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolWhereUniqueInput {
    id?: number;
    addressId?: number;
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    students?: InstanceType<typeof UserListRelationFilter>;
}
export declare class SchoolWhereInput {
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    students?: InstanceType<typeof UserListRelationFilter>;
}
export declare class School {
    id: number;
    name: string;
    addressId: number;
    createdAt: Date;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    students?: Array<User>;
    _count?: InstanceType<typeof SchoolCount>;
}
export declare class UpdateManySchoolArgs {
    data: InstanceType<typeof SchoolUpdateManyMutationInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class UpdateOneSchoolArgs {
    data: InstanceType<typeof SchoolUpdateInput>;
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
}
export declare class UpsertOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;
    create: InstanceType<typeof SchoolCreateInput>;
    update: InstanceType<typeof SchoolUpdateInput>;
}
export declare class AggregateSession {
    _count?: InstanceType<typeof SessionCountAggregate>;
    _avg?: InstanceType<typeof SessionAvgAggregate>;
    _sum?: InstanceType<typeof SessionSumAggregate>;
    _min?: InstanceType<typeof SessionMinAggregate>;
    _max?: InstanceType<typeof SessionMaxAggregate>;
}
export declare class CreateManySessionArgs {
    data: Array<SessionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSessionArgs {
    data: InstanceType<typeof SessionCreateInput>;
}
export declare class DeleteManySessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
}
export declare class DeleteOneSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class FindFirstSessionOrThrowArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindFirstSessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindManySessionArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SessionScalarFieldEnum>;
}
export declare class FindUniqueSessionOrThrowArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class FindUniqueSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class SessionAggregateArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgAggregateInput>;
    _sum?: InstanceType<typeof SessionSumAggregateInput>;
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}
export declare class SessionAvgAggregateInput {
    id?: true;
    ipAddress?: true;
}
export declare class SessionAvgAggregate {
    id?: number;
    ipAddress?: number;
}
export declare class SessionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionCountAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
    _all?: true;
}
export declare class SessionCountAggregate {
    id: number;
    token: number;
    expiresAt: number;
    createdAt: number;
    userId: number;
    device: number;
    ipAddress: number;
    _all: number;
}
export declare class SessionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionCreateManyUserInputEnvelope {
    data: Array<SessionCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class SessionCreateManyUserInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateManyInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateNestedManyWithoutUserInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}
export declare class SessionCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    create: InstanceType<typeof SessionCreateWithoutUserInput>;
}
export declare class SessionCreateWithoutUserInput {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionCreateInput {
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutSessionsInput>;
}
export declare class SessionGroupByArgs {
    where?: InstanceType<typeof SessionWhereInput>;
    orderBy?: Array<SessionOrderByWithAggregationInput>;
    by: Array<keyof typeof SessionScalarFieldEnum>;
    having?: InstanceType<typeof SessionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SessionCountAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgAggregateInput>;
    _sum?: InstanceType<typeof SessionSumAggregateInput>;
    _min?: InstanceType<typeof SessionMinAggregateInput>;
    _max?: InstanceType<typeof SessionMaxAggregateInput>;
}
export declare class SessionGroupBy {
    id: number;
    token: string;
    expiresAt: Date | string;
    createdAt: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
    _count?: InstanceType<typeof SessionCountAggregate>;
    _avg?: InstanceType<typeof SessionAvgAggregate>;
    _sum?: InstanceType<typeof SessionSumAggregate>;
    _min?: InstanceType<typeof SessionMinAggregate>;
    _max?: InstanceType<typeof SessionMaxAggregate>;
}
export declare class SessionListRelationFilter {
    every?: InstanceType<typeof SessionWhereInput>;
    some?: InstanceType<typeof SessionWhereInput>;
    none?: InstanceType<typeof SessionWhereInput>;
}
export declare class SessionMaxAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
}
export declare class SessionMaxAggregate {
    id?: number;
    token?: string;
    expiresAt?: Date | string;
    createdAt?: Date | string;
    userId?: string;
    device?: string;
    ipAddress?: number;
}
export declare class SessionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionMinAggregateInput {
    id?: true;
    token?: true;
    expiresAt?: true;
    createdAt?: true;
    userId?: true;
    device?: true;
    ipAddress?: true;
}
export declare class SessionMinAggregate {
    id?: number;
    token?: string;
    expiresAt?: Date | string;
    createdAt?: Date | string;
    userId?: string;
    device?: string;
    ipAddress?: number;
}
export declare class SessionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SessionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SessionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SessionSumOrderByAggregateInput>;
}
export declare class SessionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    token?: keyof typeof SortOrder;
    expiresAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    device?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class SessionScalarWhereWithAggregatesInput {
    AND?: Array<SessionScalarWhereWithAggregatesInput>;
    OR?: Array<SessionScalarWhereWithAggregatesInput>;
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    expiresAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    device?: InstanceType<typeof StringWithAggregatesFilter>;
    ipAddress?: InstanceType<typeof FloatWithAggregatesFilter>;
}
export declare class SessionScalarWhereInput {
    AND?: Array<SessionScalarWhereInput>;
    OR?: Array<SessionScalarWhereInput>;
    NOT?: Array<SessionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    token?: InstanceType<typeof StringFilter>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
}
export declare class SessionSumAggregateInput {
    id?: true;
    ipAddress?: true;
}
export declare class SessionSumAggregate {
    id?: number;
    ipAddress?: number;
}
export declare class SessionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    ipAddress?: keyof typeof SortOrder;
}
export declare class SessionUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
}
export declare class SessionUncheckedCreateWithoutUserInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    device: string;
    ipAddress: number;
}
export declare class SessionUncheckedCreateInput {
    id?: number;
    token: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    userId: string;
    device: string;
    ipAddress: number;
}
export declare class SessionUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<SessionScalarWhereInput>;
}
export declare class SessionUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateManyMutationInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof SessionScalarWhereInput>;
    data: InstanceType<typeof SessionUpdateManyMutationInput>;
}
export declare class SessionUpdateManyWithoutUserNestedInput {
    create?: Array<SessionCreateWithoutUserInput>;
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    disconnect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    delete?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    connect?: Array<Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>>;
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<SessionScalarWhereInput>;
}
export declare class SessionUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    data: InstanceType<typeof SessionUpdateWithoutUserInput>;
}
export declare class SessionUpdateWithoutUserInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class SessionUpdateInput {
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    device?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ipAddress?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSessionsNestedInput>;
}
export declare class SessionUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    update: InstanceType<typeof SessionUpdateWithoutUserInput>;
    create: InstanceType<typeof SessionCreateWithoutUserInput>;
}
export declare class SessionWhereUniqueInput {
    id?: number;
    token?: string;
    AND?: Array<SessionWhereInput>;
    OR?: Array<SessionWhereInput>;
    NOT?: Array<SessionWhereInput>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class SessionWhereInput {
    AND?: Array<SessionWhereInput>;
    OR?: Array<SessionWhereInput>;
    NOT?: Array<SessionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    token?: InstanceType<typeof StringFilter>;
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    device?: InstanceType<typeof StringFilter>;
    ipAddress?: InstanceType<typeof FloatFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class Session {
    id: number;
    token: string;
    expiresAt: Date;
    createdAt: Date;
    userId: string;
    device: string;
    ipAddress: number;
    user?: InstanceType<typeof User>;
}
export declare class UpdateManySessionArgs {
    data: InstanceType<typeof SessionUpdateManyMutationInput>;
    where?: InstanceType<typeof SessionWhereInput>;
}
export declare class UpdateOneSessionArgs {
    data: InstanceType<typeof SessionUpdateInput>;
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
}
export declare class UpsertOneSessionArgs {
    where: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'token'>;
    create: InstanceType<typeof SessionCreateInput>;
    update: InstanceType<typeof SessionUpdateInput>;
}
export declare class AggregateShipping {
    _count?: InstanceType<typeof ShippingCountAggregate>;
    _avg?: InstanceType<typeof ShippingAvgAggregate>;
    _sum?: InstanceType<typeof ShippingSumAggregate>;
    _min?: InstanceType<typeof ShippingMinAggregate>;
    _max?: InstanceType<typeof ShippingMaxAggregate>;
}
export declare class CreateManyShippingArgs {
    data: Array<ShippingCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneShippingArgs {
    data: InstanceType<typeof ShippingCreateInput>;
}
export declare class DeleteManyShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class DeleteOneShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class FindFirstShippingOrThrowArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindFirstShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindManyShippingArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
export declare class FindUniqueShippingOrThrowArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class FindUniqueShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingAggregateArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ShippingCountAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumAggregateInput>;
    _min?: InstanceType<typeof ShippingMinAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxAggregateInput>;
}
export declare class ShippingAvgAggregateInput {
    id?: true;
    addressId?: true;
    orderId?: true;
}
export declare class ShippingAvgAggregate {
    id?: number;
    addressId?: number;
    orderId?: number;
}
export declare class ShippingAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ShippingCountAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ShippingCountAggregate {
    id: number;
    logisticName: number;
    deliveryDate: number;
    shippingStatus: number;
    addressId: number;
    courier: number;
    estimatedTime: number;
    trackingNo: number;
    orderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ShippingCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingCreateManyInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingCreateNestedOneWithoutOrderInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateWithoutAddressInput>;
}
export declare class ShippingCreateOrConnectWithoutOrderInput {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateWithoutOrderInput>;
}
export declare class ShippingCreateWithoutAddressInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: InstanceType<typeof OrderCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingCreateWithoutOrderInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingCreateInput {
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutShippingInput>;
    order: InstanceType<typeof OrderCreateNestedOneWithoutShippingInput>;
}
export declare class ShippingGroupByArgs {
    where?: InstanceType<typeof ShippingWhereInput>;
    orderBy?: Array<ShippingOrderByWithAggregationInput>;
    by: Array<keyof typeof ShippingScalarFieldEnum>;
    having?: InstanceType<typeof ShippingScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ShippingCountAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumAggregateInput>;
    _min?: InstanceType<typeof ShippingMinAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxAggregateInput>;
}
export declare class ShippingGroupBy {
    id: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ShippingCountAggregate>;
    _avg?: InstanceType<typeof ShippingAvgAggregate>;
    _sum?: InstanceType<typeof ShippingSumAggregate>;
    _min?: InstanceType<typeof ShippingMinAggregate>;
    _max?: InstanceType<typeof ShippingMaxAggregate>;
}
export declare class ShippingMaxAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ShippingMaxAggregate {
    id?: number;
    logisticName?: string;
    deliveryDate?: Date | string;
    shippingStatus?: keyof typeof ShippingStatus;
    addressId?: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingMinAggregateInput {
    id?: true;
    logisticName?: true;
    deliveryDate?: true;
    shippingStatus?: true;
    addressId?: true;
    courier?: true;
    estimatedTime?: true;
    trackingNo?: true;
    orderId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ShippingMinAggregate {
    id?: number;
    logisticName?: string;
    deliveryDate?: Date | string;
    shippingStatus?: keyof typeof ShippingStatus;
    addressId?: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: keyof typeof SortOrder;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: keyof typeof SortOrder;
    estimatedTime?: keyof typeof SortOrder;
    trackingNo?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ShippingNullableRelationFilter {
    is?: InstanceType<typeof ShippingWhereInput>;
    isNot?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: InstanceType<typeof SortOrderInput>;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: InstanceType<typeof SortOrderInput>;
    estimatedTime?: InstanceType<typeof SortOrderInput>;
    trackingNo?: InstanceType<typeof SortOrderInput>;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ShippingCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ShippingAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ShippingMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ShippingMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ShippingSumOrderByAggregateInput>;
}
export declare class ShippingOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    logisticName?: keyof typeof SortOrder;
    deliveryDate?: InstanceType<typeof SortOrderInput>;
    shippingStatus?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    courier?: InstanceType<typeof SortOrderInput>;
    estimatedTime?: InstanceType<typeof SortOrderInput>;
    trackingNo?: InstanceType<typeof SortOrderInput>;
    orderId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
}
export declare class ShippingScalarWhereWithAggregatesInput {
    AND?: Array<ShippingScalarWhereWithAggregatesInput>;
    OR?: Array<ShippingScalarWhereWithAggregatesInput>;
    NOT?: Array<ShippingScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    logisticName?: InstanceType<typeof StringWithAggregatesFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    courier?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    estimatedTime?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    trackingNo?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ShippingSumAggregateInput {
    id?: true;
    addressId?: true;
    orderId?: true;
}
export declare class ShippingSumAggregate {
    id?: number;
    addressId?: number;
    orderId?: number;
}
export declare class ShippingSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    orderId?: keyof typeof SortOrder;
}
export declare class ShippingUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingUncheckedCreateNestedOneWithoutOrderInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class ShippingUncheckedCreateWithoutAddressInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedCreateWithoutOrderInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedCreateInput {
    id?: number;
    logisticName: string;
    deliveryDate?: Date | string;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier?: string;
    estimatedTime?: string;
    trackingNo?: string;
    orderId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ShippingUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class ShippingUncheckedUpdateOneWithoutOrderNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutOrderInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutOrderInput>;
}
export declare class ShippingUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateWithoutOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUpdateManyMutationInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ShippingUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class ShippingUpdateOneWithoutOrderNestedInput {
    create?: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    connectOrCreate?: InstanceType<typeof ShippingCreateOrConnectWithoutOrderInput>;
    upsert?: InstanceType<typeof ShippingUpsertWithoutOrderInput>;
    disconnect?: InstanceType<typeof ShippingWhereInput>;
    delete?: InstanceType<typeof ShippingWhereInput>;
    connect?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    update?: InstanceType<typeof ShippingUpdateToOneWithWhereWithoutOrderInput>;
}
export declare class ShippingUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof ShippingWhereInput>;
    data: InstanceType<typeof ShippingUpdateWithoutAddressInput>;
}
export declare class ShippingUpdateToOneWithWhereWithoutOrderInput {
    where?: InstanceType<typeof ShippingWhereInput>;
    data: InstanceType<typeof ShippingUpdateWithoutOrderInput>;
}
export declare class ShippingUpdateWithoutAddressInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpdateWithoutOrderInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpdateInput {
    logisticName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deliveryDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFieldUpdateOperationsInput>;
    courier?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    estimatedTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    trackingNo?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutShippingNestedInput>;
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutShippingNestedInput>;
}
export declare class ShippingUpsertWithoutAddressInput {
    update: InstanceType<typeof ShippingUpdateWithoutAddressInput>;
    create: InstanceType<typeof ShippingCreateWithoutAddressInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingUpsertWithoutOrderInput {
    update: InstanceType<typeof ShippingUpdateWithoutOrderInput>;
    create: InstanceType<typeof ShippingCreateWithoutOrderInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class ShippingWhereUniqueInput {
    id?: number;
    addressId?: number;
    orderId?: number;
    AND?: Array<ShippingWhereInput>;
    OR?: Array<ShippingWhereInput>;
    NOT?: Array<ShippingWhereInput>;
    logisticName?: InstanceType<typeof StringFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFilter>;
    courier?: InstanceType<typeof StringNullableFilter>;
    estimatedTime?: InstanceType<typeof StringNullableFilter>;
    trackingNo?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class ShippingWhereInput {
    AND?: Array<ShippingWhereInput>;
    OR?: Array<ShippingWhereInput>;
    NOT?: Array<ShippingWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    logisticName?: InstanceType<typeof StringFilter>;
    deliveryDate?: InstanceType<typeof DateTimeNullableFilter>;
    shippingStatus?: InstanceType<typeof EnumShippingStatusFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    courier?: InstanceType<typeof StringNullableFilter>;
    estimatedTime?: InstanceType<typeof StringNullableFilter>;
    trackingNo?: InstanceType<typeof StringNullableFilter>;
    orderId?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    order?: InstanceType<typeof OrderRelationFilter>;
}
export declare class Shipping {
    id: number;
    logisticName: string;
    deliveryDate: Date | null;
    shippingStatus: keyof typeof ShippingStatus;
    addressId: number;
    courier: string | null;
    estimatedTime: string | null;
    trackingNo: string | null;
    orderId: number;
    createdAt: Date;
    updatedAt: Date;
    address?: InstanceType<typeof Address>;
    order?: InstanceType<typeof Order>;
}
export declare class UpdateManyShippingArgs {
    data: InstanceType<typeof ShippingUpdateManyMutationInput>;
    where?: InstanceType<typeof ShippingWhereInput>;
}
export declare class UpdateOneShippingArgs {
    data: InstanceType<typeof ShippingUpdateInput>;
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
export declare class UpsertOneShippingArgs {
    where: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
    create: InstanceType<typeof ShippingCreateInput>;
    update: InstanceType<typeof ShippingUpdateInput>;
}
export declare class AggregateSubdistrict {
    _count?: InstanceType<typeof SubdistrictCountAggregate>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregate>;
    _sum?: InstanceType<typeof SubdistrictSumAggregate>;
    _min?: InstanceType<typeof SubdistrictMinAggregate>;
    _max?: InstanceType<typeof SubdistrictMaxAggregate>;
}
export declare class CreateManySubdistrictArgs {
    data: Array<SubdistrictCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSubdistrictArgs {
    data: InstanceType<typeof SubdistrictCreateInput>;
}
export declare class DeleteManySubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class DeleteOneSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class FindFirstSubdistrictOrThrowArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindFirstSubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindManySubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindUniqueSubdistrictOrThrowArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class FindUniqueSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class SubdistrictAggregateArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubdistrictCountAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxAggregateInput>;
}
export declare class SubdistrictAvgAggregateInput {
    id?: true;
    districtId?: true;
}
export declare class SubdistrictAvgAggregate {
    id?: number;
    districtId?: number;
}
export declare class SubdistrictAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
}
export declare class SubdistrictCountAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
    _all?: true;
}
export declare class SubdistrictCountAggregate {
    id: number;
    name: number;
    districtId: number;
    postalCode: number;
    _all: number;
}
export declare class SubdistrictCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictCount {
    address?: number;
}
export declare class SubdistrictCreateManyDistrictInputEnvelope {
    data: Array<SubdistrictCreateManyDistrictInput>;
    skipDuplicates?: boolean;
}
export declare class SubdistrictCreateManyDistrictInput {
    id?: number;
    name: string;
    postalCode: string;
}
export declare class SubdistrictCreateManyInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
}
export declare class SubdistrictCreateNestedManyWithoutDistrictInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
}
export declare class SubdistrictCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SubdistrictCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class SubdistrictCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
}
export declare class SubdistrictCreateOrConnectWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateWithoutDistrictInput>;
}
export declare class SubdistrictCreateWithoutAddressInput {
    name: string;
    postalCode: string;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutSubdistrictsInput>;
}
export declare class SubdistrictCreateWithoutDistrictInput {
    name: string;
    postalCode: string;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictCreateInput {
    name: string;
    postalCode: string;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutSubdistrictsInput>;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictGroupByArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithAggregationInput>;
    by: Array<keyof typeof SubdistrictScalarFieldEnum>;
    having?: InstanceType<typeof SubdistrictScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubdistrictCountAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxAggregateInput>;
}
export declare class SubdistrictGroupBy {
    id: number;
    name: string;
    districtId: number;
    postalCode: string;
    _count?: InstanceType<typeof SubdistrictCountAggregate>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregate>;
    _sum?: InstanceType<typeof SubdistrictSumAggregate>;
    _min?: InstanceType<typeof SubdistrictMinAggregate>;
    _max?: InstanceType<typeof SubdistrictMaxAggregate>;
}
export declare class SubdistrictListRelationFilter {
    every?: InstanceType<typeof SubdistrictWhereInput>;
    some?: InstanceType<typeof SubdistrictWhereInput>;
    none?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictMaxAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
}
export declare class SubdistrictMaxAggregate {
    id?: number;
    name?: string;
    districtId?: number;
    postalCode?: string;
}
export declare class SubdistrictMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictMinAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
}
export declare class SubdistrictMinAggregate {
    id?: number;
    name?: string;
    districtId?: number;
    postalCode?: string;
}
export declare class SubdistrictMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SubdistrictOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SubdistrictCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumOrderByAggregateInput>;
}
export declare class SubdistrictOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    district?: InstanceType<typeof DistrictOrderByWithRelationInput>;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
}
export declare class SubdistrictRelationFilter {
    is?: InstanceType<typeof SubdistrictWhereInput>;
    isNot?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictScalarWhereWithAggregatesInput {
    AND?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    OR?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    NOT?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    districtId?: InstanceType<typeof IntWithAggregatesFilter>;
    postalCode?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class SubdistrictScalarWhereInput {
    AND?: Array<SubdistrictScalarWhereInput>;
    OR?: Array<SubdistrictScalarWhereInput>;
    NOT?: Array<SubdistrictScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
}
export declare class SubdistrictSumAggregateInput {
    id?: true;
    districtId?: true;
}
export declare class SubdistrictSumAggregate {
    id?: number;
    districtId?: number;
}
export declare class SubdistrictSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
}
export declare class SubdistrictUncheckedCreateNestedManyWithoutDistrictInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
}
export declare class SubdistrictUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
}
export declare class SubdistrictUncheckedCreateWithoutDistrictInput {
    id?: number;
    name: string;
    postalCode: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictUncheckedCreateInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<SubdistrictUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    update?: Array<SubdistrictUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<SubdistrictUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<SubdistrictScalarWhereInput>;
}
export declare class SubdistrictUncheckedUpdateManyWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUpdateManyWithWhereWithoutDistrictInput {
    where: InstanceType<typeof SubdistrictScalarWhereInput>;
    data: InstanceType<typeof SubdistrictUpdateManyMutationInput>;
}
export declare class SubdistrictUpdateManyWithoutDistrictNestedInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<SubdistrictUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    update?: Array<SubdistrictUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<SubdistrictUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<SubdistrictScalarWhereInput>;
}
export declare class SubdistrictUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SubdistrictCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SubdistrictUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof SubdistrictUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SubdistrictUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    data: InstanceType<typeof SubdistrictUpdateWithoutAddressInput>;
}
export declare class SubdistrictUpdateWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    data: InstanceType<typeof SubdistrictUpdateWithoutDistrictInput>;
}
export declare class SubdistrictUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput>;
}
export declare class SubdistrictUpdateWithoutDistrictInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpsertWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    update: InstanceType<typeof SubdistrictUpdateWithoutDistrictInput>;
    create: InstanceType<typeof SubdistrictCreateWithoutDistrictInput>;
}
export declare class SubdistrictUpsertWithoutAddressInput {
    update: InstanceType<typeof SubdistrictUpdateWithoutAddressInput>;
    create: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictWhereUniqueInput {
    id?: number;
    AND?: Array<SubdistrictWhereInput>;
    OR?: Array<SubdistrictWhereInput>;
    NOT?: Array<SubdistrictWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class SubdistrictWhereInput {
    AND?: Array<SubdistrictWhereInput>;
    OR?: Array<SubdistrictWhereInput>;
    NOT?: Array<SubdistrictWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class Subdistrict {
    id: number;
    name: string;
    districtId: number;
    postalCode: string;
    district?: InstanceType<typeof District>;
    address?: Array<Address>;
    _count?: InstanceType<typeof SubdistrictCount>;
}
export declare class UpdateManySubdistrictArgs {
    data: InstanceType<typeof SubdistrictUpdateManyMutationInput>;
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class UpdateOneSubdistrictArgs {
    data: InstanceType<typeof SubdistrictUpdateInput>;
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class UpsertOneSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateInput>;
    update: InstanceType<typeof SubdistrictUpdateInput>;
}
export declare class AggregateTransaction {
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class CreateManyTransactionArgs {
    data: Array<TransactionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneTransactionArgs {
    data: InstanceType<typeof TransactionCreateInput>;
}
export declare class DeleteManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class DeleteOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class FindFirstTransactionOrThrowArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindFirstTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindUniqueTransactionOrThrowArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class FindUniqueTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class TransactionAggregateArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionAvgAggregateInput {
    id?: true;
    amount?: true;
    fromAccountId?: true;
    toAccountId?: true;
    invoiceId?: true;
    installmentId?: true;
    withdrawalRequestId?: true;
    uniqueCode?: true;
}
export declare class TransactionAvgAggregate {
    id?: number;
    amount?: number;
    fromAccountId?: number;
    toAccountId?: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
}
export declare class TransactionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    installmentId?: keyof typeof SortOrder;
    withdrawalRequestId?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
}
export declare class TransactionCountAggregateInput {
    id?: true;
    amount?: true;
    proofUrl?: true;
    status?: true;
    transactionCategory?: true;
    fromAccountId?: true;
    toAccountId?: true;
    invoiceId?: true;
    installmentId?: true;
    withdrawalRequestId?: true;
    uniqueCode?: true;
    createdAt?: true;
    _all?: true;
}
export declare class TransactionCountAggregate {
    id: number;
    amount: number;
    proofUrl: number;
    status: number;
    transactionCategory: number;
    fromAccountId: number;
    toAccountId: number;
    invoiceId: number;
    installmentId: number;
    withdrawalRequestId: number;
    uniqueCode: number;
    createdAt: number;
    _all: number;
}
export declare class TransactionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    installmentId?: keyof typeof SortOrder;
    withdrawalRequestId?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionCreateManyFromAccountInputEnvelope {
    data: Array<TransactionCreateManyFromAccountInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyFromAccountInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyInvoiceInputEnvelope {
    data: Array<TransactionCreateManyInvoiceInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyInvoiceInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyToAccountInputEnvelope {
    data: Array<TransactionCreateManyToAccountInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyToAccountInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionCreateNestedManyWithoutFromAccountInput {
    create?: Array<TransactionCreateWithoutFromAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyFromAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionCreateNestedManyWithoutInvoiceInput {
    create?: Array<TransactionCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutInvoiceInput>;
    createMany?: InstanceType<typeof TransactionCreateManyInvoiceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionCreateNestedManyWithoutToAccountInput {
    create?: Array<TransactionCreateWithoutToAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyToAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionCreateNestedOneWithoutInstallmentInput {
    create?: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutInstallmentInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class TransactionCreateNestedOneWithoutWithdrawalRequestInput {
    create?: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutWithdrawalRequestInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class TransactionCreateOrConnectWithoutFromAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateWithoutFromAccountInput>;
}
export declare class TransactionCreateOrConnectWithoutInstallmentInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
}
export declare class TransactionCreateOrConnectWithoutInvoiceInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateWithoutInvoiceInput>;
}
export declare class TransactionCreateOrConnectWithoutToAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateWithoutToAccountInput>;
}
export declare class TransactionCreateOrConnectWithoutWithdrawalRequestInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
}
export declare class TransactionCreateWithoutFromAccountInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    toAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionDestinationInput>;
    invoice?: InstanceType<typeof InvoiceCreateNestedOneWithoutTransactionsInput>;
    Installment?: InstanceType<typeof InstallmentCreateNestedOneWithoutTransactionInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateWithoutInstallmentInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    fromAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionOriginsInput>;
    toAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionDestinationInput>;
    invoice?: InstanceType<typeof InvoiceCreateNestedOneWithoutTransactionsInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateWithoutInvoiceInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    fromAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionOriginsInput>;
    toAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionDestinationInput>;
    Installment?: InstanceType<typeof InstallmentCreateNestedOneWithoutTransactionInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateWithoutToAccountInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    fromAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionOriginsInput>;
    invoice?: InstanceType<typeof InvoiceCreateNestedOneWithoutTransactionsInput>;
    Installment?: InstanceType<typeof InstallmentCreateNestedOneWithoutTransactionInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateWithoutWithdrawalRequestInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    fromAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionOriginsInput>;
    toAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionDestinationInput>;
    invoice?: InstanceType<typeof InvoiceCreateNestedOneWithoutTransactionsInput>;
    Installment?: InstanceType<typeof InstallmentCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionCreateInput {
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    uniqueCode?: number;
    createdAt?: Date | string;
    fromAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionOriginsInput>;
    toAccount: InstanceType<typeof AccountCreateNestedOneWithoutTransactionDestinationInput>;
    invoice?: InstanceType<typeof InvoiceCreateNestedOneWithoutTransactionsInput>;
    Installment?: InstanceType<typeof InstallmentCreateNestedOneWithoutTransactionInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedOneWithoutTransactionInput>;
}
export declare class TransactionGroupByArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithAggregationInput>;
    by: Array<keyof typeof TransactionScalarFieldEnum>;
    having?: InstanceType<typeof TransactionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionGroupBy {
    id: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt: Date | string;
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class TransactionListRelationFilter {
    every?: InstanceType<typeof TransactionWhereInput>;
    some?: InstanceType<typeof TransactionWhereInput>;
    none?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionMaxAggregateInput {
    id?: true;
    amount?: true;
    proofUrl?: true;
    status?: true;
    transactionCategory?: true;
    fromAccountId?: true;
    toAccountId?: true;
    invoiceId?: true;
    installmentId?: true;
    withdrawalRequestId?: true;
    uniqueCode?: true;
    createdAt?: true;
}
export declare class TransactionMaxAggregate {
    id?: number;
    amount?: number;
    proofUrl?: string;
    status?: keyof typeof TransactionStatus;
    transactionCategory?: keyof typeof TransactionCategory;
    fromAccountId?: number;
    toAccountId?: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    installmentId?: keyof typeof SortOrder;
    withdrawalRequestId?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionMinAggregateInput {
    id?: true;
    amount?: true;
    proofUrl?: true;
    status?: true;
    transactionCategory?: true;
    fromAccountId?: true;
    toAccountId?: true;
    invoiceId?: true;
    installmentId?: true;
    withdrawalRequestId?: true;
    uniqueCode?: true;
    createdAt?: true;
}
export declare class TransactionMinAggregate {
    id?: number;
    amount?: number;
    proofUrl?: string;
    status?: keyof typeof TransactionStatus;
    transactionCategory?: keyof typeof TransactionCategory;
    fromAccountId?: number;
    toAccountId?: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    installmentId?: keyof typeof SortOrder;
    withdrawalRequestId?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class TransactionNullableRelationFilter {
    is?: InstanceType<typeof TransactionWhereInput>;
    isNot?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class TransactionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    proofUrl?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: InstanceType<typeof SortOrderInput>;
    installmentId?: InstanceType<typeof SortOrderInput>;
    withdrawalRequestId?: InstanceType<typeof SortOrderInput>;
    uniqueCode?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof TransactionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof TransactionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumOrderByAggregateInput>;
}
export declare class TransactionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    proofUrl?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    transactionCategory?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: InstanceType<typeof SortOrderInput>;
    installmentId?: InstanceType<typeof SortOrderInput>;
    withdrawalRequestId?: InstanceType<typeof SortOrderInput>;
    uniqueCode?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    fromAccount?: InstanceType<typeof AccountOrderByWithRelationInput>;
    toAccount?: InstanceType<typeof AccountOrderByWithRelationInput>;
    invoice?: InstanceType<typeof InvoiceOrderByWithRelationInput>;
    Installment?: InstanceType<typeof InstallmentOrderByWithRelationInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestOrderByWithRelationInput>;
}
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    proofUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    status?: InstanceType<typeof EnumTransactionStatusWithAggregatesFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryWithAggregatesFilter>;
    fromAccountId?: InstanceType<typeof IntWithAggregatesFilter>;
    toAccountId?: InstanceType<typeof IntWithAggregatesFilter>;
    invoiceId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    installmentId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    withdrawalRequestId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    uniqueCode?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class TransactionScalarWhereInput {
    AND?: Array<TransactionScalarWhereInput>;
    OR?: Array<TransactionScalarWhereInput>;
    NOT?: Array<TransactionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    fromAccountId?: InstanceType<typeof IntFilter>;
    toAccountId?: InstanceType<typeof IntFilter>;
    invoiceId?: InstanceType<typeof IntNullableFilter>;
    installmentId?: InstanceType<typeof IntNullableFilter>;
    withdrawalRequestId?: InstanceType<typeof IntNullableFilter>;
    uniqueCode?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class TransactionSumAggregateInput {
    id?: true;
    amount?: true;
    fromAccountId?: true;
    toAccountId?: true;
    invoiceId?: true;
    installmentId?: true;
    withdrawalRequestId?: true;
    uniqueCode?: true;
}
export declare class TransactionSumAggregate {
    id?: number;
    amount?: number;
    fromAccountId?: number;
    toAccountId?: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
}
export declare class TransactionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    fromAccountId?: keyof typeof SortOrder;
    toAccountId?: keyof typeof SortOrder;
    invoiceId?: keyof typeof SortOrder;
    installmentId?: keyof typeof SortOrder;
    withdrawalRequestId?: keyof typeof SortOrder;
    uniqueCode?: keyof typeof SortOrder;
}
export declare class TransactionUncheckedCreateNestedManyWithoutFromAccountInput {
    create?: Array<TransactionCreateWithoutFromAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyFromAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionUncheckedCreateNestedManyWithoutInvoiceInput {
    create?: Array<TransactionCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutInvoiceInput>;
    createMany?: InstanceType<typeof TransactionCreateManyInvoiceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionUncheckedCreateNestedManyWithoutToAccountInput {
    create?: Array<TransactionCreateWithoutToAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyToAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
}
export declare class TransactionUncheckedCreateNestedOneWithoutInstallmentInput {
    create?: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutInstallmentInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class TransactionUncheckedCreateNestedOneWithoutWithdrawalRequestInput {
    create?: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutWithdrawalRequestInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class TransactionUncheckedCreateWithoutFromAccountInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateWithoutInstallmentInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateWithoutInvoiceInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateWithoutToAccountInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateWithoutWithdrawalRequestInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateInput {
    id?: number;
    amount: number;
    proofUrl?: string;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    uniqueCode?: number;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedUpdateManyWithoutFromAccountNestedInput {
    create?: Array<TransactionCreateWithoutFromAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutFromAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyFromAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutFromAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutFromAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutFromAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutInvoiceNestedInput {
    create?: Array<TransactionCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutInvoiceInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutInvoiceInput>;
    createMany?: InstanceType<typeof TransactionCreateManyInvoiceInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutInvoiceInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutInvoiceInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutInvoiceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutToAccountNestedInput {
    create?: Array<TransactionCreateWithoutToAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutToAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyToAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutToAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutToAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutToAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateOneWithoutInstallmentNestedInput {
    create?: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutInstallmentInput>;
    upsert?: InstanceType<typeof TransactionUpsertWithoutInstallmentInput>;
    disconnect?: InstanceType<typeof TransactionWhereInput>;
    delete?: InstanceType<typeof TransactionWhereInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update?: InstanceType<typeof TransactionUpdateToOneWithWhereWithoutInstallmentInput>;
}
export declare class TransactionUncheckedUpdateOneWithoutWithdrawalRequestNestedInput {
    create?: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutWithdrawalRequestInput>;
    upsert?: InstanceType<typeof TransactionUpsertWithoutWithdrawalRequestInput>;
    disconnect?: InstanceType<typeof TransactionWhereInput>;
    delete?: InstanceType<typeof TransactionWhereInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update?: InstanceType<typeof TransactionUpdateToOneWithWhereWithoutWithdrawalRequestInput>;
}
export declare class TransactionUncheckedUpdateWithoutFromAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutInstallmentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutInvoiceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutToAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutWithdrawalRequestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    fromAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    toAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    invoiceId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    installmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    withdrawalRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateManyMutationInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutFromAccountInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutInvoiceInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutToAccountInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithoutFromAccountNestedInput {
    create?: Array<TransactionCreateWithoutFromAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutFromAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutFromAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyFromAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutFromAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutFromAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateManyWithoutInvoiceNestedInput {
    create?: Array<TransactionCreateWithoutInvoiceInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutInvoiceInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutInvoiceInput>;
    createMany?: InstanceType<typeof TransactionCreateManyInvoiceInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutInvoiceInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutInvoiceInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateManyWithoutToAccountNestedInput {
    create?: Array<TransactionCreateWithoutToAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutToAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutToAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyToAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutToAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutToAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateOneWithoutInstallmentNestedInput {
    create?: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutInstallmentInput>;
    upsert?: InstanceType<typeof TransactionUpsertWithoutInstallmentInput>;
    disconnect?: InstanceType<typeof TransactionWhereInput>;
    delete?: InstanceType<typeof TransactionWhereInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update?: InstanceType<typeof TransactionUpdateToOneWithWhereWithoutInstallmentInput>;
}
export declare class TransactionUpdateOneWithoutWithdrawalRequestNestedInput {
    create?: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof TransactionCreateOrConnectWithoutWithdrawalRequestInput>;
    upsert?: InstanceType<typeof TransactionUpsertWithoutWithdrawalRequestInput>;
    disconnect?: InstanceType<typeof TransactionWhereInput>;
    delete?: InstanceType<typeof TransactionWhereInput>;
    connect?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update?: InstanceType<typeof TransactionUpdateToOneWithWhereWithoutWithdrawalRequestInput>;
}
export declare class TransactionUpdateToOneWithWhereWithoutInstallmentInput {
    where?: InstanceType<typeof TransactionWhereInput>;
    data: InstanceType<typeof TransactionUpdateWithoutInstallmentInput>;
}
export declare class TransactionUpdateToOneWithWhereWithoutWithdrawalRequestInput {
    where?: InstanceType<typeof TransactionWhereInput>;
    data: InstanceType<typeof TransactionUpdateWithoutWithdrawalRequestInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutFromAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    data: InstanceType<typeof TransactionUpdateWithoutFromAccountInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutInvoiceInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    data: InstanceType<typeof TransactionUpdateWithoutInvoiceInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutToAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    data: InstanceType<typeof TransactionUpdateWithoutToAccountInput>;
}
export declare class TransactionUpdateWithoutFromAccountInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    toAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneWithoutTransactionsNestedInput>;
    Installment?: InstanceType<typeof InstallmentUpdateOneWithoutTransactionNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateWithoutInstallmentInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    fromAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput>;
    toAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneWithoutTransactionsNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateWithoutInvoiceInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    fromAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput>;
    toAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput>;
    Installment?: InstanceType<typeof InstallmentUpdateOneWithoutTransactionNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateWithoutToAccountInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    fromAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneWithoutTransactionsNestedInput>;
    Installment?: InstanceType<typeof InstallmentUpdateOneWithoutTransactionNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateWithoutWithdrawalRequestInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    fromAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput>;
    toAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneWithoutTransactionsNestedInput>;
    Installment?: InstanceType<typeof InstallmentUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpdateInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFieldUpdateOperationsInput>;
    uniqueCode?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    fromAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionOriginsNestedInput>;
    toAccount?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionDestinationNestedInput>;
    invoice?: InstanceType<typeof InvoiceUpdateOneWithoutTransactionsNestedInput>;
    Installment?: InstanceType<typeof InstallmentUpdateOneWithoutTransactionNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateOneWithoutTransactionNestedInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutFromAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update: InstanceType<typeof TransactionUpdateWithoutFromAccountInput>;
    create: InstanceType<typeof TransactionCreateWithoutFromAccountInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutInvoiceInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update: InstanceType<typeof TransactionUpdateWithoutInvoiceInput>;
    create: InstanceType<typeof TransactionCreateWithoutInvoiceInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutToAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    update: InstanceType<typeof TransactionUpdateWithoutToAccountInput>;
    create: InstanceType<typeof TransactionCreateWithoutToAccountInput>;
}
export declare class TransactionUpsertWithoutInstallmentInput {
    update: InstanceType<typeof TransactionUpdateWithoutInstallmentInput>;
    create: InstanceType<typeof TransactionCreateWithoutInstallmentInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionUpsertWithoutWithdrawalRequestInput {
    update: InstanceType<typeof TransactionUpdateWithoutWithdrawalRequestInput>;
    create: InstanceType<typeof TransactionCreateWithoutWithdrawalRequestInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionWhereUniqueInput {
    id?: number;
    installmentId?: number;
    withdrawalRequestId?: number;
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    amount?: InstanceType<typeof FloatFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    fromAccountId?: InstanceType<typeof IntFilter>;
    toAccountId?: InstanceType<typeof IntFilter>;
    invoiceId?: InstanceType<typeof IntNullableFilter>;
    uniqueCode?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    fromAccount?: InstanceType<typeof AccountRelationFilter>;
    toAccount?: InstanceType<typeof AccountRelationFilter>;
    invoice?: InstanceType<typeof InvoiceNullableRelationFilter>;
    Installment?: InstanceType<typeof InstallmentNullableRelationFilter>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestNullableRelationFilter>;
}
export declare class TransactionWhereInput {
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    transactionCategory?: InstanceType<typeof EnumTransactionCategoryFilter>;
    fromAccountId?: InstanceType<typeof IntFilter>;
    toAccountId?: InstanceType<typeof IntFilter>;
    invoiceId?: InstanceType<typeof IntNullableFilter>;
    installmentId?: InstanceType<typeof IntNullableFilter>;
    withdrawalRequestId?: InstanceType<typeof IntNullableFilter>;
    uniqueCode?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    fromAccount?: InstanceType<typeof AccountRelationFilter>;
    toAccount?: InstanceType<typeof AccountRelationFilter>;
    invoice?: InstanceType<typeof InvoiceNullableRelationFilter>;
    Installment?: InstanceType<typeof InstallmentNullableRelationFilter>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestNullableRelationFilter>;
}
export declare class Transaction {
    id: number;
    amount: number;
    proofUrl: string | null;
    status: keyof typeof TransactionStatus;
    transactionCategory: keyof typeof TransactionCategory;
    fromAccountId: number;
    toAccountId: number;
    invoiceId: number | null;
    installmentId: number | null;
    withdrawalRequestId: number | null;
    uniqueCode: number | null;
    createdAt: Date;
    fromAccount?: InstanceType<typeof Account>;
    toAccount?: InstanceType<typeof Account>;
    invoice?: InstanceType<typeof Invoice> | null;
    Installment?: InstanceType<typeof Installment> | null;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequest> | null;
}
export declare class UpdateManyTransactionArgs {
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class UpdateOneTransactionArgs {
    data: InstanceType<typeof TransactionUpdateInput>;
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
}
export declare class UpsertOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id' | 'installmentId' | 'withdrawalRequestId'>;
    create: InstanceType<typeof TransactionCreateInput>;
    update: InstanceType<typeof TransactionUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserAvgAggregateInput {
    addressId?: true;
    schoolId?: true;
}
export declare class UserAvgAggregate {
    addressId?: number;
    schoolId?: number;
}
export declare class UserAvgOrderByAggregateInput {
    addressId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class UserCountAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    addressId: number;
    userRole: number;
    userType: number;
    avatarUrl: number;
    whatsappNumber: number;
    whatsappVerifiedAt: number;
    password: number;
    referralCode: number;
    referredById: number;
    status: number;
    schoolId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    theme: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserCount {
    referredUsers?: number;
    checkIns?: number;
    accounts?: number;
    orders?: number;
    sessions?: number;
    hotelsCreated?: number;
    programsParticipation?: number;
    claimedRewards?: number;
    withdrawalRequest?: number;
    userNotifications?: number;
    programsCreated?: number;
    filesCreated?: number;
}
export declare class UserCreateManyReferredByInputEnvelope {
    data: Array<UserCreateManyReferredByInput>;
    skipDuplicates?: boolean;
}
export declare class UserCreateManyReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateManySchoolInputEnvelope {
    data: Array<UserCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class UserCreateManySchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateManyInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserCreateNestedManyWithoutProgramsParticipationInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutReferredByInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedManyWithoutSchoolInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserCreateNestedOneWithoutAccountsInput {
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutCheckInsInput {
    create?: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutClaimedRewardsInput {
    create?: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimedRewardsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutFilesCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFilesCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutHotelsCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutHotelsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutOrdersInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutProgramsCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgramsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutReferredUsersInput {
    create?: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReferredUsersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutSessionsInput {
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutUserNotificationsInput {
    create?: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserNotificationsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateNestedOneWithoutWithdrawalRequestInput {
    create?: InstanceType<typeof UserCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutWithdrawalRequestInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserCreateOrConnectWithoutAccountsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutAccountsInput>;
}
export declare class UserCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutAddressInput>;
}
export declare class UserCreateOrConnectWithoutCheckInsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutCheckInsInput>;
}
export declare class UserCreateOrConnectWithoutClaimedRewardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
}
export declare class UserCreateOrConnectWithoutFilesCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
}
export declare class UserCreateOrConnectWithoutHotelsCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
}
export declare class UserCreateOrConnectWithoutOrdersInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
}
export declare class UserCreateOrConnectWithoutProgramsCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
}
export declare class UserCreateOrConnectWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutProgramsParticipationInput>;
}
export declare class UserCreateOrConnectWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutReferredByInput>;
}
export declare class UserCreateOrConnectWithoutReferredUsersInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
}
export declare class UserCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutSchoolInput>;
}
export declare class UserCreateOrConnectWithoutSessionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutSessionsInput>;
}
export declare class UserCreateOrConnectWithoutUserNotificationsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
}
export declare class UserCreateOrConnectWithoutWithdrawalRequestInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    create: InstanceType<typeof UserCreateWithoutWithdrawalRequestInput>;
}
export declare class UserCreateWithoutAccountsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutAddressInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutCheckInsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutClaimedRewardsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutFilesCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutHotelsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutOrdersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutProgramsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutProgramsParticipationInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutReferredUsersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutSchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutSessionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutUserNotificationsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateWithoutWithdrawalRequestInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserCreateInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    address: InstanceType<typeof AddressCreateNestedOneWithoutUserInput>;
    referredBy?: InstanceType<typeof UserCreateNestedOneWithoutReferredUsersInput>;
    referredUsers?: InstanceType<typeof UserCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInCreateNestedManyWithoutUserInput>;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutStudentsInput>;
    accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status: keyof typeof UserStatus;
    schoolId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    theme: keyof typeof Theme;
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserListRelationFilter {
    every?: InstanceType<typeof UserWhereInput>;
    some?: InstanceType<typeof UserWhereInput>;
    none?: InstanceType<typeof UserWhereInput>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    addressId?: number;
    userRole?: keyof typeof UserRole;
    userType?: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber?: string;
    whatsappVerifiedAt?: Date | string;
    password?: string;
    referralCode?: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    addressId?: true;
    userRole?: true;
    userType?: true;
    avatarUrl?: true;
    whatsappNumber?: true;
    whatsappVerifiedAt?: true;
    password?: true;
    referralCode?: true;
    referredById?: true;
    status?: true;
    schoolId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    theme?: true;
}
export declare class UserMinAggregate {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    addressId?: number;
    userRole?: keyof typeof UserRole;
    userType?: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber?: string;
    whatsappVerifiedAt?: Date | string;
    password?: string;
    referralCode?: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: keyof typeof SortOrder;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    theme?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: InstanceType<typeof SortOrderInput>;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    theme?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: InstanceType<typeof SortOrderInput>;
    email?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    userRole?: keyof typeof SortOrder;
    userType?: keyof typeof SortOrder;
    avatarUrl?: InstanceType<typeof SortOrderInput>;
    whatsappNumber?: keyof typeof SortOrder;
    whatsappVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    referralCode?: keyof typeof SortOrder;
    referredById?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    theme?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
    referredBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    referredUsers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    checkIns?: InstanceType<typeof CheckInOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
    orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
    sessions?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
    hotelsCreated?: InstanceType<typeof HotelOrderByRelationAggregateInput>;
    programsParticipation?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
    claimedRewards?: InstanceType<typeof RewardClaimOrderByRelationAggregateInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestOrderByRelationAggregateInput>;
    userNotifications?: InstanceType<typeof UserNotificationOrderByRelationAggregateInput>;
    programsCreated?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
    filesCreated?: InstanceType<typeof FileOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    lastName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
    userRole?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    userType?: InstanceType<typeof EnumUserTypeWithAggregatesFilter>;
    avatarUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    whatsappNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    referralCode?: InstanceType<typeof StringWithAggregatesFilter>;
    referredById?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    status?: InstanceType<typeof EnumUserStatusWithAggregatesFilter>;
    schoolId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    theme?: InstanceType<typeof EnumThemeWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappNumber?: InstanceType<typeof StringFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referralCode?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
}
export declare class UserSumAggregateInput {
    addressId?: true;
    schoolId?: true;
}
export declare class UserSumAggregate {
    addressId?: number;
    schoolId?: number;
}
export declare class UserSumOrderByAggregateInput {
    addressId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class UserUncheckedCreateNestedManyWithoutProgramsParticipationInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutReferredByInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
}
export declare class UserUncheckedCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
}
export declare class UserUncheckedCreateWithoutAccountsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutAddressInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutCheckInsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutClaimedRewardsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutFilesCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutHotelsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutOrdersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutProgramsCreatedInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutProgramsParticipationInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutReferredByInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutReferredUsersInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutSchoolInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutSessionsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutUserNotificationsInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateWithoutWithdrawalRequestInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    firstName: string;
    lastName?: string;
    email: string;
    addressId: number;
    userRole?: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl?: string;
    whatsappNumber: string;
    whatsappVerifiedAt?: Date | string;
    password: string;
    referralCode: string;
    referredById?: string;
    status?: keyof typeof UserStatus;
    schoolId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    theme?: keyof typeof Theme;
    referredUsers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutReferredByInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedCreateNestedManyWithoutUserInput>;
    accounts?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutUserInput>;
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutOrderByInput>;
    sessions?: InstanceType<typeof SessionUncheckedCreateNestedManyWithoutUserInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedCreateNestedManyWithoutCreatedByInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutParticipantInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedCreateNestedManyWithoutUserInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedCreateNestedManyWithoutUserInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutCreatedByInput>;
    filesCreated?: InstanceType<typeof FileUncheckedCreateNestedManyWithoutCreatedByInput>;
}
export declare class UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProgramsParticipationInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProgramsParticipationInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProgramsParticipationInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutReferredByNestedInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutReferredByInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferredByInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class UserUncheckedUpdateWithoutAccountsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimedRewardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutFilesCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutHotelsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProgramsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutReferredUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutSessionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutUserNotificationsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutWithdrawalRequestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referredById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredUsers?: InstanceType<typeof UserUncheckedUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUncheckedUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUncheckedUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUncheckedUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUncheckedUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUncheckedUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUncheckedUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUncheckedUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutProgramsParticipationInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutReferredByInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithoutProgramsParticipationNestedInput {
    create?: Array<UserCreateWithoutProgramsParticipationInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProgramsParticipationInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutProgramsParticipationInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutProgramsParticipationInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutReferredByNestedInput {
    create?: Array<UserCreateWithoutReferredByInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferredByInput>;
    createMany?: InstanceType<typeof UserCreateManyReferredByInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutReferredByInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferredByInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutSchoolNestedInput {
    create?: Array<UserCreateWithoutSchoolInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof UserCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateOneRequiredWithoutAccountsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAccountsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAccountsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAccountsInput>;
}
export declare class UserUpdateOneRequiredWithoutCheckInsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCheckInsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCheckInsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCheckInsInput>;
}
export declare class UserUpdateOneRequiredWithoutClaimedRewardsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimedRewardsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutClaimedRewardsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutClaimedRewardsInput>;
}
export declare class UserUpdateOneRequiredWithoutFilesCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFilesCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutFilesCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutFilesCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutHotelsCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutHotelsCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutHotelsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutHotelsCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutOrdersNestedInput {
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutOrdersInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutOrdersInput>;
}
export declare class UserUpdateOneRequiredWithoutProgramsCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgramsCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutProgramsCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutProgramsCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutSessionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSessionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutSessionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSessionsInput>;
}
export declare class UserUpdateOneRequiredWithoutUserNotificationsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserNotificationsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserNotificationsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserNotificationsInput>;
}
export declare class UserUpdateOneRequiredWithoutWithdrawalRequestNestedInput {
    create?: InstanceType<typeof UserCreateWithoutWithdrawalRequestInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutWithdrawalRequestInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutWithdrawalRequestInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutWithdrawalRequestInput>;
}
export declare class UserUpdateOneWithoutAddressNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAddressInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class UserUpdateOneWithoutReferredUsersNestedInput {
    create?: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutReferredUsersInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutReferredUsersInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutReferredUsersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAccountsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAccountsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAddressInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCheckInsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCheckInsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutClaimedRewardsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimedRewardsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutFilesCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutFilesCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutHotelsCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutHotelsCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutOrdersInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutOrdersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutProgramsCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutProgramsCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutReferredUsersInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutReferredUsersInput>;
}
export declare class UserUpdateToOneWithWhereWithoutSessionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutSessionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutUserNotificationsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutUserNotificationsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutWithdrawalRequestInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutWithdrawalRequestInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutProgramsParticipationInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutReferredByInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    data: InstanceType<typeof UserUpdateWithoutSchoolInput>;
}
export declare class UserUpdateWithoutAccountsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutAddressInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutCheckInsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutClaimedRewardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutFilesCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutHotelsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutOrdersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutProgramsCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutProgramsParticipationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutReferredByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutReferredUsersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutSessionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutUserNotificationsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateWithoutWithdrawalRequestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userRole?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    avatarUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsappNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsappVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    referralCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    theme?: InstanceType<typeof EnumThemeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutUserNestedInput>;
    referredBy?: InstanceType<typeof UserUpdateOneWithoutReferredUsersNestedInput>;
    referredUsers?: InstanceType<typeof UserUpdateManyWithoutReferredByNestedInput>;
    checkIns?: InstanceType<typeof CheckInUpdateManyWithoutUserNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutStudentsNestedInput>;
    accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
    orders?: InstanceType<typeof OrderUpdateManyWithoutOrderByNestedInput>;
    sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
    hotelsCreated?: InstanceType<typeof HotelUpdateManyWithoutCreatedByNestedInput>;
    programsParticipation?: InstanceType<typeof ProgramUpdateManyWithoutParticipantNestedInput>;
    claimedRewards?: InstanceType<typeof RewardClaimUpdateManyWithoutUserNestedInput>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestUpdateManyWithoutUserNestedInput>;
    userNotifications?: InstanceType<typeof UserNotificationUpdateManyWithoutUserNestedInput>;
    programsCreated?: InstanceType<typeof ProgramUpdateManyWithoutCreatedByNestedInput>;
    filesCreated?: InstanceType<typeof FileUpdateManyWithoutCreatedByNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutProgramsParticipationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutProgramsParticipationInput>;
    create: InstanceType<typeof UserCreateWithoutProgramsParticipationInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutReferredByInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutReferredByInput>;
    create: InstanceType<typeof UserCreateWithoutReferredByInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber' | 'referralCode'>;
    update: InstanceType<typeof UserUpdateWithoutSchoolInput>;
    create: InstanceType<typeof UserCreateWithoutSchoolInput>;
}
export declare class UserUpsertWithoutAccountsInput {
    update: InstanceType<typeof UserUpdateWithoutAccountsInput>;
    create: InstanceType<typeof UserCreateWithoutAccountsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutAddressInput {
    update: InstanceType<typeof UserUpdateWithoutAddressInput>;
    create: InstanceType<typeof UserCreateWithoutAddressInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCheckInsInput {
    update: InstanceType<typeof UserUpdateWithoutCheckInsInput>;
    create: InstanceType<typeof UserCreateWithoutCheckInsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutClaimedRewardsInput {
    update: InstanceType<typeof UserUpdateWithoutClaimedRewardsInput>;
    create: InstanceType<typeof UserCreateWithoutClaimedRewardsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutFilesCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutFilesCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutFilesCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutHotelsCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutHotelsCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutHotelsCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutOrdersInput {
    update: InstanceType<typeof UserUpdateWithoutOrdersInput>;
    create: InstanceType<typeof UserCreateWithoutOrdersInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutProgramsCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutProgramsCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutProgramsCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutReferredUsersInput {
    update: InstanceType<typeof UserUpdateWithoutReferredUsersInput>;
    create: InstanceType<typeof UserCreateWithoutReferredUsersInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutSessionsInput {
    update: InstanceType<typeof UserUpdateWithoutSessionsInput>;
    create: InstanceType<typeof UserCreateWithoutSessionsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutUserNotificationsInput {
    update: InstanceType<typeof UserUpdateWithoutUserNotificationsInput>;
    create: InstanceType<typeof UserCreateWithoutUserNotificationsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutWithdrawalRequestInput {
    update: InstanceType<typeof UserUpdateWithoutWithdrawalRequestInput>;
    create: InstanceType<typeof UserCreateWithoutWithdrawalRequestInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    addressId?: number;
    whatsappNumber?: string;
    referralCode?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    referredBy?: InstanceType<typeof UserNullableRelationFilter>;
    referredUsers?: InstanceType<typeof UserListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    accounts?: InstanceType<typeof AccountListRelationFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    hotelsCreated?: InstanceType<typeof HotelListRelationFilter>;
    programsParticipation?: InstanceType<typeof ProgramListRelationFilter>;
    claimedRewards?: InstanceType<typeof RewardClaimListRelationFilter>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestListRelationFilter>;
    userNotifications?: InstanceType<typeof UserNotificationListRelationFilter>;
    programsCreated?: InstanceType<typeof ProgramListRelationFilter>;
    filesCreated?: InstanceType<typeof FileListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringNullableFilter>;
    email?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    userRole?: InstanceType<typeof EnumUserRoleFilter>;
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    avatarUrl?: InstanceType<typeof StringNullableFilter>;
    whatsappNumber?: InstanceType<typeof StringFilter>;
    whatsappVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    referralCode?: InstanceType<typeof StringFilter>;
    referredById?: InstanceType<typeof StringNullableFilter>;
    status?: InstanceType<typeof EnumUserStatusFilter>;
    schoolId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    theme?: InstanceType<typeof EnumThemeFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
    referredBy?: InstanceType<typeof UserNullableRelationFilter>;
    referredUsers?: InstanceType<typeof UserListRelationFilter>;
    checkIns?: InstanceType<typeof CheckInListRelationFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
    accounts?: InstanceType<typeof AccountListRelationFilter>;
    orders?: InstanceType<typeof OrderListRelationFilter>;
    sessions?: InstanceType<typeof SessionListRelationFilter>;
    hotelsCreated?: InstanceType<typeof HotelListRelationFilter>;
    programsParticipation?: InstanceType<typeof ProgramListRelationFilter>;
    claimedRewards?: InstanceType<typeof RewardClaimListRelationFilter>;
    withdrawalRequest?: InstanceType<typeof WithdrawalRequestListRelationFilter>;
    userNotifications?: InstanceType<typeof UserNotificationListRelationFilter>;
    programsCreated?: InstanceType<typeof ProgramListRelationFilter>;
    filesCreated?: InstanceType<typeof FileListRelationFilter>;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string | null;
    email: string;
    addressId: number;
    userRole: keyof typeof UserRole;
    userType: keyof typeof UserType;
    avatarUrl: string | null;
    whatsappNumber: string;
    whatsappVerifiedAt: Date | null;
    password: string;
    referralCode: string;
    referredById: string | null;
    status: keyof typeof UserStatus;
    schoolId: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    theme: keyof typeof Theme;
    address?: InstanceType<typeof Address>;
    referredBy?: InstanceType<typeof User> | null;
    referredUsers?: Array<User>;
    checkIns?: Array<CheckIn>;
    school?: InstanceType<typeof School> | null;
    accounts?: Array<Account>;
    orders?: Array<Order>;
    sessions?: Array<Session>;
    hotelsCreated?: Array<Hotel>;
    programsParticipation?: Array<Program>;
    claimedRewards?: Array<RewardClaim>;
    withdrawalRequest?: Array<WithdrawalRequest>;
    userNotifications?: Array<UserNotification>;
    programsCreated?: Array<Program>;
    filesCreated?: Array<File>;
    _count?: InstanceType<typeof UserCount>;
}
export declare class AggregateUserNotification {
    _count?: InstanceType<typeof UserNotificationCountAggregate>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregate>;
    _sum?: InstanceType<typeof UserNotificationSumAggregate>;
    _min?: InstanceType<typeof UserNotificationMinAggregate>;
    _max?: InstanceType<typeof UserNotificationMaxAggregate>;
}
export declare class CreateManyUserNotificationArgs {
    data: Array<UserNotificationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserNotificationArgs {
    data: InstanceType<typeof UserNotificationCreateInput>;
}
export declare class DeleteManyUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class DeleteOneUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class FindFirstUserNotificationOrThrowArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindFirstUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindManyUserNotificationArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserNotificationScalarFieldEnum>;
}
export declare class FindUniqueUserNotificationOrThrowArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class FindUniqueUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class UpdateManyUserNotificationArgs {
    data: InstanceType<typeof UserNotificationUpdateManyMutationInput>;
    where?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class UpdateOneUserNotificationArgs {
    data: InstanceType<typeof UserNotificationUpdateInput>;
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
}
export declare class UpsertOneUserNotificationArgs {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserNotificationCreateInput>;
    update: InstanceType<typeof UserNotificationUpdateInput>;
}
export declare class UserNotificationAggregateArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserNotificationCountAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxAggregateInput>;
}
export declare class UserNotificationAvgAggregateInput {
    id?: true;
}
export declare class UserNotificationAvgAggregate {
    id?: number;
}
export declare class UserNotificationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserNotificationCountAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
    _all?: true;
}
export declare class UserNotificationCountAggregate {
    id: number;
    title: number;
    subtitle: number;
    content: number;
    createdAt: number;
    category: number;
    isRead: number;
    isCleared: number;
    userId: number;
    deepLink: number;
    fcmToken: number;
    _all: number;
}
export declare class UserNotificationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationCreateManyUserInputEnvelope {
    data: Array<UserNotificationCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class UserNotificationCreateManyUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateManyInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateNestedManyWithoutUserInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
}
export declare class UserNotificationCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserNotificationCreateWithoutUserInput>;
}
export declare class UserNotificationCreateWithoutUserInput {
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationCreateInput {
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserNotificationsInput>;
}
export declare class UserNotificationGroupByArgs {
    where?: InstanceType<typeof UserNotificationWhereInput>;
    orderBy?: Array<UserNotificationOrderByWithAggregationInput>;
    by: Array<keyof typeof UserNotificationScalarFieldEnum>;
    having?: InstanceType<typeof UserNotificationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserNotificationCountAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxAggregateInput>;
}
export declare class UserNotificationGroupBy {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead: boolean;
    isCleared: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
    _count?: InstanceType<typeof UserNotificationCountAggregate>;
    _avg?: InstanceType<typeof UserNotificationAvgAggregate>;
    _sum?: InstanceType<typeof UserNotificationSumAggregate>;
    _min?: InstanceType<typeof UserNotificationMinAggregate>;
    _max?: InstanceType<typeof UserNotificationMaxAggregate>;
}
export declare class UserNotificationListRelationFilter {
    every?: InstanceType<typeof UserNotificationWhereInput>;
    some?: InstanceType<typeof UserNotificationWhereInput>;
    none?: InstanceType<typeof UserNotificationWhereInput>;
}
export declare class UserNotificationMaxAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
}
export declare class UserNotificationMaxAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    createdAt?: Date | string;
    category?: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId?: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationMinAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    createdAt?: true;
    category?: true;
    isRead?: true;
    isCleared?: true;
    userId?: true;
    deepLink?: true;
    fcmToken?: true;
}
export declare class UserNotificationMinAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    createdAt?: Date | string;
    category?: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId?: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
}
export declare class UserNotificationOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserNotificationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserNotificationCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserNotificationAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserNotificationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserNotificationMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserNotificationSumOrderByAggregateInput>;
}
export declare class UserNotificationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserNotificationScalarWhereWithAggregatesInput {
    AND?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    OR?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    NOT?: Array<UserNotificationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    subtitle?: InstanceType<typeof StringWithAggregatesFilter>;
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryWithAggregatesFilter>;
    isRead?: InstanceType<typeof BoolWithAggregatesFilter>;
    isCleared?: InstanceType<typeof BoolWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    deepLink?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    fcmToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class UserNotificationScalarWhereInput {
    AND?: Array<UserNotificationScalarWhereInput>;
    OR?: Array<UserNotificationScalarWhereInput>;
    NOT?: Array<UserNotificationScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
}
export declare class UserNotificationSumAggregateInput {
    id?: true;
}
export declare class UserNotificationSumAggregate {
    id?: number;
}
export declare class UserNotificationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserNotificationUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
}
export declare class UserNotificationUncheckedCreateWithoutUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationUncheckedCreateInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt?: Date | string;
    category: keyof typeof UserNotificationCategory;
    isRead?: boolean;
    isCleared?: boolean;
    userId: string;
    deepLink?: string;
    fcmToken?: string;
}
export declare class UserNotificationUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    update?: Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserNotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserNotificationScalarWhereInput>;
}
export declare class UserNotificationUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateManyMutationInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof UserNotificationScalarWhereInput>;
    data: InstanceType<typeof UserNotificationUpdateManyMutationInput>;
}
export declare class UserNotificationUpdateManyWithoutUserNestedInput {
    create?: Array<UserNotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<UserNotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserNotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>>;
    update?: Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserNotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserNotificationScalarWhereInput>;
}
export declare class UserNotificationUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserNotificationUpdateWithoutUserInput>;
}
export declare class UserNotificationUpdateWithoutUserInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserNotificationUpdateInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserNotificationsNestedInput>;
}
export declare class UserNotificationUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserNotificationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserNotificationUpdateWithoutUserInput>;
    create: InstanceType<typeof UserNotificationCreateWithoutUserInput>;
}
export declare class UserNotificationWhereUniqueInput {
    id?: number;
    AND?: Array<UserNotificationWhereInput>;
    OR?: Array<UserNotificationWhereInput>;
    NOT?: Array<UserNotificationWhereInput>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserNotificationWhereInput {
    AND?: Array<UserNotificationWhereInput>;
    OR?: Array<UserNotificationWhereInput>;
    NOT?: Array<UserNotificationWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    category?: InstanceType<typeof EnumUserNotificationCategoryFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof StringFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserNotification {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt: Date;
    category: keyof typeof UserNotificationCategory;
    isRead: boolean;
    isCleared: boolean;
    userId: string;
    deepLink: string | null;
    fcmToken: string | null;
    user?: InstanceType<typeof User>;
}
export declare class AggregateWithdrawalRequest {
    _count?: InstanceType<typeof WithdrawalRequestCountAggregate>;
    _avg?: InstanceType<typeof WithdrawalRequestAvgAggregate>;
    _sum?: InstanceType<typeof WithdrawalRequestSumAggregate>;
    _min?: InstanceType<typeof WithdrawalRequestMinAggregate>;
    _max?: InstanceType<typeof WithdrawalRequestMaxAggregate>;
}
export declare class CreateManyWithdrawalRequestArgs {
    data: Array<WithdrawalRequestCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneWithdrawalRequestArgs {
    data: InstanceType<typeof WithdrawalRequestCreateInput>;
}
export declare class DeleteManyWithdrawalRequestArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
}
export declare class DeleteOneWithdrawalRequestArgs {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
export declare class FindFirstWithdrawalRequestOrThrowArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
export declare class FindFirstWithdrawalRequestArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
export declare class FindManyWithdrawalRequestArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
export declare class FindUniqueWithdrawalRequestOrThrowArgs {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
export declare class FindUniqueWithdrawalRequestArgs {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
export declare class UpdateManyWithdrawalRequestArgs {
    data: InstanceType<typeof WithdrawalRequestUpdateManyMutationInput>;
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
}
export declare class UpdateOneWithdrawalRequestArgs {
    data: InstanceType<typeof WithdrawalRequestUpdateInput>;
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
export declare class UpsertOneWithdrawalRequestArgs {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WithdrawalRequestCreateInput>;
    update: InstanceType<typeof WithdrawalRequestUpdateInput>;
}
export declare class WithdrawalRequestAggregateArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WithdrawalRequestCountAggregateInput>;
    _avg?: InstanceType<typeof WithdrawalRequestAvgAggregateInput>;
    _sum?: InstanceType<typeof WithdrawalRequestSumAggregateInput>;
    _min?: InstanceType<typeof WithdrawalRequestMinAggregateInput>;
    _max?: InstanceType<typeof WithdrawalRequestMaxAggregateInput>;
}
export declare class WithdrawalRequestAvgAggregateInput {
    id?: true;
    amount?: true;
    transactionId?: true;
}
export declare class WithdrawalRequestAvgAggregate {
    id?: number;
    amount?: number;
    transactionId?: number;
}
export declare class WithdrawalRequestAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestCountAggregateInput {
    id?: true;
    userId?: true;
    amount?: true;
    status?: true;
    proofUrl?: true;
    proofDescription?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class WithdrawalRequestCountAggregate {
    id: number;
    userId: number;
    amount: number;
    status: number;
    proofUrl: number;
    proofDescription: number;
    transactionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class WithdrawalRequestCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    proofDescription?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestCreateManyUserInputEnvelope {
    data: Array<WithdrawalRequestCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class WithdrawalRequestCreateManyUserInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class WithdrawalRequestCreateManyInput {
    id?: number;
    userId: string;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class WithdrawalRequestCreateNestedManyWithoutUserInput {
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof WithdrawalRequestCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
}
export declare class WithdrawalRequestCreateNestedOneWithoutTransactionInput {
    create?: InstanceType<typeof WithdrawalRequestCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof WithdrawalRequestCreateOrConnectWithoutTransactionInput>;
    connect?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
}
export declare class WithdrawalRequestCreateOrConnectWithoutTransactionInput {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WithdrawalRequestCreateWithoutTransactionInput>;
}
export declare class WithdrawalRequestCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WithdrawalRequestCreateWithoutUserInput>;
}
export declare class WithdrawalRequestCreateWithoutTransactionInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutWithdrawalRequestInput>;
}
export declare class WithdrawalRequestCreateWithoutUserInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transaction?: InstanceType<typeof TransactionCreateNestedOneWithoutWithdrawalRequestInput>;
}
export declare class WithdrawalRequestCreateInput {
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutWithdrawalRequestInput>;
    transaction?: InstanceType<typeof TransactionCreateNestedOneWithoutWithdrawalRequestInput>;
}
export declare class WithdrawalRequestGroupByArgs {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    orderBy?: Array<WithdrawalRequestOrderByWithAggregationInput>;
    by: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
    having?: InstanceType<typeof WithdrawalRequestScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WithdrawalRequestCountAggregateInput>;
    _avg?: InstanceType<typeof WithdrawalRequestAvgAggregateInput>;
    _sum?: InstanceType<typeof WithdrawalRequestSumAggregateInput>;
    _min?: InstanceType<typeof WithdrawalRequestMinAggregateInput>;
    _max?: InstanceType<typeof WithdrawalRequestMaxAggregateInput>;
}
export declare class WithdrawalRequestGroupBy {
    id: number;
    userId: string;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof WithdrawalRequestCountAggregate>;
    _avg?: InstanceType<typeof WithdrawalRequestAvgAggregate>;
    _sum?: InstanceType<typeof WithdrawalRequestSumAggregate>;
    _min?: InstanceType<typeof WithdrawalRequestMinAggregate>;
    _max?: InstanceType<typeof WithdrawalRequestMaxAggregate>;
}
export declare class WithdrawalRequestListRelationFilter {
    every?: InstanceType<typeof WithdrawalRequestWhereInput>;
    some?: InstanceType<typeof WithdrawalRequestWhereInput>;
    none?: InstanceType<typeof WithdrawalRequestWhereInput>;
}
export declare class WithdrawalRequestMaxAggregateInput {
    id?: true;
    userId?: true;
    amount?: true;
    status?: true;
    proofUrl?: true;
    proofDescription?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class WithdrawalRequestMaxAggregate {
    id?: number;
    userId?: string;
    amount?: number;
    status?: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class WithdrawalRequestMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    proofDescription?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestMinAggregateInput {
    id?: true;
    userId?: true;
    amount?: true;
    status?: true;
    proofUrl?: true;
    proofDescription?: true;
    transactionId?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class WithdrawalRequestMinAggregate {
    id?: number;
    userId?: string;
    amount?: number;
    status?: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class WithdrawalRequestMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    proofUrl?: keyof typeof SortOrder;
    proofDescription?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestNullableRelationFilter {
    is?: InstanceType<typeof WithdrawalRequestWhereInput>;
    isNot?: InstanceType<typeof WithdrawalRequestWhereInput>;
}
export declare class WithdrawalRequestOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    proofUrl?: InstanceType<typeof SortOrderInput>;
    proofDescription?: InstanceType<typeof SortOrderInput>;
    transactionId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof WithdrawalRequestCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof WithdrawalRequestAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof WithdrawalRequestMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof WithdrawalRequestMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof WithdrawalRequestSumOrderByAggregateInput>;
}
export declare class WithdrawalRequestOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    proofUrl?: InstanceType<typeof SortOrderInput>;
    proofDescription?: InstanceType<typeof SortOrderInput>;
    transactionId?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    transaction?: InstanceType<typeof TransactionOrderByWithRelationInput>;
}
export declare class WithdrawalRequestScalarWhereWithAggregatesInput {
    AND?: Array<WithdrawalRequestScalarWhereWithAggregatesInput>;
    OR?: Array<WithdrawalRequestScalarWhereWithAggregatesInput>;
    NOT?: Array<WithdrawalRequestScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    status?: InstanceType<typeof EnumTransactionStatusWithAggregatesFilter>;
    proofUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    proofDescription?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    transactionId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class WithdrawalRequestScalarWhereInput {
    AND?: Array<WithdrawalRequestScalarWhereInput>;
    OR?: Array<WithdrawalRequestScalarWhereInput>;
    NOT?: Array<WithdrawalRequestScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    proofDescription?: InstanceType<typeof StringNullableFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class WithdrawalRequestSumAggregateInput {
    id?: true;
    amount?: true;
    transactionId?: true;
}
export declare class WithdrawalRequestSumAggregate {
    id?: number;
    amount?: number;
    transactionId?: number;
}
export declare class WithdrawalRequestSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionId?: keyof typeof SortOrder;
}
export declare class WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof WithdrawalRequestCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
}
export declare class WithdrawalRequestUncheckedCreateWithoutTransactionInput {
    id?: number;
    userId: string;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class WithdrawalRequestUncheckedCreateWithoutUserInput {
    id?: number;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transaction?: InstanceType<typeof TransactionUncheckedCreateNestedOneWithoutWithdrawalRequestInput>;
}
export declare class WithdrawalRequestUncheckedCreateInput {
    id?: number;
    userId: string;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl?: string;
    proofDescription?: string;
    transactionId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transaction?: InstanceType<typeof TransactionUncheckedCreateNestedOneWithoutWithdrawalRequestInput>;
}
export declare class WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;
    upsert?: Array<WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof WithdrawalRequestCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    update?: Array<WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<WithdrawalRequestUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<WithdrawalRequestScalarWhereInput>;
}
export declare class WithdrawalRequestUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class WithdrawalRequestUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class WithdrawalRequestUncheckedUpdateWithoutTransactionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class WithdrawalRequestUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUncheckedUpdateOneWithoutWithdrawalRequestNestedInput>;
}
export declare class WithdrawalRequestUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUncheckedUpdateOneWithoutWithdrawalRequestNestedInput>;
}
export declare class WithdrawalRequestUpdateManyMutationInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class WithdrawalRequestUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof WithdrawalRequestScalarWhereInput>;
    data: InstanceType<typeof WithdrawalRequestUpdateManyMutationInput>;
}
export declare class WithdrawalRequestUpdateManyWithoutUserNestedInput {
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;
    upsert?: Array<WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof WithdrawalRequestCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>>;
    update?: Array<WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<WithdrawalRequestUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<WithdrawalRequestScalarWhereInput>;
}
export declare class WithdrawalRequestUpdateOneWithoutTransactionNestedInput {
    create?: InstanceType<typeof WithdrawalRequestCreateWithoutTransactionInput>;
    connectOrCreate?: InstanceType<typeof WithdrawalRequestCreateOrConnectWithoutTransactionInput>;
    upsert?: InstanceType<typeof WithdrawalRequestUpsertWithoutTransactionInput>;
    disconnect?: InstanceType<typeof WithdrawalRequestWhereInput>;
    delete?: InstanceType<typeof WithdrawalRequestWhereInput>;
    connect?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof WithdrawalRequestUpdateToOneWithWhereWithoutTransactionInput>;
}
export declare class WithdrawalRequestUpdateToOneWithWhereWithoutTransactionInput {
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
    data: InstanceType<typeof WithdrawalRequestUpdateWithoutTransactionInput>;
}
export declare class WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    data: InstanceType<typeof WithdrawalRequestUpdateWithoutUserInput>;
}
export declare class WithdrawalRequestUpdateWithoutTransactionInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutWithdrawalRequestNestedInput>;
}
export declare class WithdrawalRequestUpdateWithoutUserInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneWithoutWithdrawalRequestNestedInput>;
}
export declare class WithdrawalRequestUpdateInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumTransactionStatusFieldUpdateOperationsInput>;
    proofUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    proofDescription?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutWithdrawalRequestNestedInput>;
    transaction?: InstanceType<typeof TransactionUpdateOneWithoutWithdrawalRequestNestedInput>;
}
export declare class WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
    update: InstanceType<typeof WithdrawalRequestUpdateWithoutUserInput>;
    create: InstanceType<typeof WithdrawalRequestCreateWithoutUserInput>;
}
export declare class WithdrawalRequestUpsertWithoutTransactionInput {
    update: InstanceType<typeof WithdrawalRequestUpdateWithoutTransactionInput>;
    create: InstanceType<typeof WithdrawalRequestCreateWithoutTransactionInput>;
    where?: InstanceType<typeof WithdrawalRequestWhereInput>;
}
export declare class WithdrawalRequestWhereUniqueInput {
    id?: number;
    AND?: Array<WithdrawalRequestWhereInput>;
    OR?: Array<WithdrawalRequestWhereInput>;
    NOT?: Array<WithdrawalRequestWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    proofDescription?: InstanceType<typeof StringNullableFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transaction?: InstanceType<typeof TransactionNullableRelationFilter>;
}
export declare class WithdrawalRequestWhereInput {
    AND?: Array<WithdrawalRequestWhereInput>;
    OR?: Array<WithdrawalRequestWhereInput>;
    NOT?: Array<WithdrawalRequestWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    userId?: InstanceType<typeof StringFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    status?: InstanceType<typeof EnumTransactionStatusFilter>;
    proofUrl?: InstanceType<typeof StringNullableFilter>;
    proofDescription?: InstanceType<typeof StringNullableFilter>;
    transactionId?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    transaction?: InstanceType<typeof TransactionNullableRelationFilter>;
}
export declare class WithdrawalRequest {
    id: number;
    userId: string;
    amount: number;
    status: keyof typeof TransactionStatus;
    proofUrl: string | null;
    proofDescription: string | null;
    transactionId: number | null;
    createdAt: Date;
    updatedAt: Date;
    user?: InstanceType<typeof User>;
    transaction?: InstanceType<typeof Transaction> | null;
}
