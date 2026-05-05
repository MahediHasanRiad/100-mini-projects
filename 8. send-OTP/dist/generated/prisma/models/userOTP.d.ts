import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model userOTP
 *
 */
export type userOTPModel = runtime.Types.Result.DefaultSelection<Prisma.$userOTPPayload>;
export type AggregateUserOTP = {
    _count: UserOTPCountAggregateOutputType | null;
    _min: UserOTPMinAggregateOutputType | null;
    _max: UserOTPMaxAggregateOutputType | null;
};
export type UserOTPMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    email: string | null;
    expired: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserOTPMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    email: string | null;
    expired: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserOTPCountAggregateOutputType = {
    id: number;
    userId: number;
    email: number;
    expired: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserOTPMinAggregateInputType = {
    id?: true;
    userId?: true;
    email?: true;
    expired?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserOTPMaxAggregateInputType = {
    id?: true;
    userId?: true;
    email?: true;
    expired?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserOTPCountAggregateInputType = {
    id?: true;
    userId?: true;
    email?: true;
    expired?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserOTPAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which userOTP to aggregate.
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userOTPS to fetch.
     */
    orderBy?: Prisma.userOTPOrderByWithRelationInput | Prisma.userOTPOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.userOTPWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userOTPS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userOTPS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned userOTPS
    **/
    _count?: true | UserOTPCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserOTPMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserOTPMaxAggregateInputType;
};
export type GetUserOTPAggregateType<T extends UserOTPAggregateArgs> = {
    [P in keyof T & keyof AggregateUserOTP]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserOTP[P]> : Prisma.GetScalarType<T[P], AggregateUserOTP[P]>;
};
export type userOTPGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userOTPWhereInput;
    orderBy?: Prisma.userOTPOrderByWithAggregationInput | Prisma.userOTPOrderByWithAggregationInput[];
    by: Prisma.UserOTPScalarFieldEnum[] | Prisma.UserOTPScalarFieldEnum;
    having?: Prisma.userOTPScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserOTPCountAggregateInputType | true;
    _min?: UserOTPMinAggregateInputType;
    _max?: UserOTPMaxAggregateInputType;
};
export type UserOTPGroupByOutputType = {
    id: string;
    userId: string;
    email: string;
    expired: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: UserOTPCountAggregateOutputType | null;
    _min: UserOTPMinAggregateOutputType | null;
    _max: UserOTPMaxAggregateOutputType | null;
};
export type GetUserOTPGroupByPayload<T extends userOTPGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserOTPGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserOTPGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserOTPGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserOTPGroupByOutputType[P]>;
}>>;
export type userOTPWhereInput = {
    AND?: Prisma.userOTPWhereInput | Prisma.userOTPWhereInput[];
    OR?: Prisma.userOTPWhereInput[];
    NOT?: Prisma.userOTPWhereInput | Prisma.userOTPWhereInput[];
    id?: Prisma.StringFilter<"userOTP"> | string;
    userId?: Prisma.StringFilter<"userOTP"> | string;
    email?: Prisma.StringFilter<"userOTP"> | string;
    expired?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type userOTPOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type userOTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.userOTPWhereInput | Prisma.userOTPWhereInput[];
    OR?: Prisma.userOTPWhereInput[];
    NOT?: Prisma.userOTPWhereInput | Prisma.userOTPWhereInput[];
    userId?: Prisma.StringFilter<"userOTP"> | string;
    email?: Prisma.StringFilter<"userOTP"> | string;
    expired?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type userOTPOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.userOTPCountOrderByAggregateInput;
    _max?: Prisma.userOTPMaxOrderByAggregateInput;
    _min?: Prisma.userOTPMinOrderByAggregateInput;
};
export type userOTPScalarWhereWithAggregatesInput = {
    AND?: Prisma.userOTPScalarWhereWithAggregatesInput | Prisma.userOTPScalarWhereWithAggregatesInput[];
    OR?: Prisma.userOTPScalarWhereWithAggregatesInput[];
    NOT?: Prisma.userOTPScalarWhereWithAggregatesInput | Prisma.userOTPScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"userOTP"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"userOTP"> | string;
    email?: Prisma.StringWithAggregatesFilter<"userOTP"> | string;
    expired?: Prisma.DateTimeWithAggregatesFilter<"userOTP"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"userOTP"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"userOTP"> | Date | string;
};
export type userOTPCreateInput = {
    id?: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutUserOTPsInput;
};
export type userOTPUncheckedCreateInput = {
    id?: string;
    userId: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userOTPUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutUserOTPsNestedInput;
};
export type userOTPUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOTPCreateManyInput = {
    id?: string;
    userId: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userOTPUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOTPUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserOTPListRelationFilter = {
    every?: Prisma.userOTPWhereInput;
    some?: Prisma.userOTPWhereInput;
    none?: Prisma.userOTPWhereInput;
};
export type userOTPOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type userOTPCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userOTPMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userOTPMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expired?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userOTPCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput> | Prisma.userOTPCreateWithoutUserInput[] | Prisma.userOTPUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userOTPCreateOrConnectWithoutUserInput | Prisma.userOTPCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.userOTPCreateManyUserInputEnvelope;
    connect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
};
export type userOTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput> | Prisma.userOTPCreateWithoutUserInput[] | Prisma.userOTPUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userOTPCreateOrConnectWithoutUserInput | Prisma.userOTPCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.userOTPCreateManyUserInputEnvelope;
    connect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
};
export type userOTPUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput> | Prisma.userOTPCreateWithoutUserInput[] | Prisma.userOTPUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userOTPCreateOrConnectWithoutUserInput | Prisma.userOTPCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.userOTPUpsertWithWhereUniqueWithoutUserInput | Prisma.userOTPUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.userOTPCreateManyUserInputEnvelope;
    set?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    disconnect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    delete?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    connect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    update?: Prisma.userOTPUpdateWithWhereUniqueWithoutUserInput | Prisma.userOTPUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.userOTPUpdateManyWithWhereWithoutUserInput | Prisma.userOTPUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.userOTPScalarWhereInput | Prisma.userOTPScalarWhereInput[];
};
export type userOTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput> | Prisma.userOTPCreateWithoutUserInput[] | Prisma.userOTPUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userOTPCreateOrConnectWithoutUserInput | Prisma.userOTPCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.userOTPUpsertWithWhereUniqueWithoutUserInput | Prisma.userOTPUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.userOTPCreateManyUserInputEnvelope;
    set?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    disconnect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    delete?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    connect?: Prisma.userOTPWhereUniqueInput | Prisma.userOTPWhereUniqueInput[];
    update?: Prisma.userOTPUpdateWithWhereUniqueWithoutUserInput | Prisma.userOTPUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.userOTPUpdateManyWithWhereWithoutUserInput | Prisma.userOTPUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.userOTPScalarWhereInput | Prisma.userOTPScalarWhereInput[];
};
export type userOTPCreateWithoutUserInput = {
    id?: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userOTPUncheckedCreateWithoutUserInput = {
    id?: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userOTPCreateOrConnectWithoutUserInput = {
    where: Prisma.userOTPWhereUniqueInput;
    create: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput>;
};
export type userOTPCreateManyUserInputEnvelope = {
    data: Prisma.userOTPCreateManyUserInput | Prisma.userOTPCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type userOTPUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.userOTPWhereUniqueInput;
    update: Prisma.XOR<Prisma.userOTPUpdateWithoutUserInput, Prisma.userOTPUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.userOTPCreateWithoutUserInput, Prisma.userOTPUncheckedCreateWithoutUserInput>;
};
export type userOTPUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.userOTPWhereUniqueInput;
    data: Prisma.XOR<Prisma.userOTPUpdateWithoutUserInput, Prisma.userOTPUncheckedUpdateWithoutUserInput>;
};
export type userOTPUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.userOTPScalarWhereInput;
    data: Prisma.XOR<Prisma.userOTPUpdateManyMutationInput, Prisma.userOTPUncheckedUpdateManyWithoutUserInput>;
};
export type userOTPScalarWhereInput = {
    AND?: Prisma.userOTPScalarWhereInput | Prisma.userOTPScalarWhereInput[];
    OR?: Prisma.userOTPScalarWhereInput[];
    NOT?: Prisma.userOTPScalarWhereInput | Prisma.userOTPScalarWhereInput[];
    id?: Prisma.StringFilter<"userOTP"> | string;
    userId?: Prisma.StringFilter<"userOTP"> | string;
    email?: Prisma.StringFilter<"userOTP"> | string;
    expired?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userOTP"> | Date | string;
};
export type userOTPCreateManyUserInput = {
    id?: string;
    email: string;
    expired?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userOTPUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOTPUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOTPUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expired?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOTPSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    email?: boolean;
    expired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userOTP"]>;
export type userOTPSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    email?: boolean;
    expired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userOTP"]>;
export type userOTPSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    email?: boolean;
    expired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userOTP"]>;
export type userOTPSelectScalar = {
    id?: boolean;
    userId?: boolean;
    email?: boolean;
    expired?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type userOTPOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "email" | "expired" | "createdAt" | "updatedAt", ExtArgs["result"]["userOTP"]>;
export type userOTPInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type userOTPIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type userOTPIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $userOTPPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "userOTP";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        email: string;
        expired: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userOTP"]>;
    composites: {};
};
export type userOTPGetPayload<S extends boolean | null | undefined | userOTPDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$userOTPPayload, S>;
export type userOTPCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<userOTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserOTPCountAggregateInputType | true;
};
export interface userOTPDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['userOTP'];
        meta: {
            name: 'userOTP';
        };
    };
    /**
     * Find zero or one UserOTP that matches the filter.
     * @param {userOTPFindUniqueArgs} args - Arguments to find a UserOTP
     * @example
     * // Get one UserOTP
     * const userOTP = await prisma.userOTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userOTPFindUniqueArgs>(args: Prisma.SelectSubset<T, userOTPFindUniqueArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UserOTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userOTPFindUniqueOrThrowArgs} args - Arguments to find a UserOTP
     * @example
     * // Get one UserOTP
     * const userOTP = await prisma.userOTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userOTPFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, userOTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserOTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPFindFirstArgs} args - Arguments to find a UserOTP
     * @example
     * // Get one UserOTP
     * const userOTP = await prisma.userOTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userOTPFindFirstArgs>(args?: Prisma.SelectSubset<T, userOTPFindFirstArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UserOTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPFindFirstOrThrowArgs} args - Arguments to find a UserOTP
     * @example
     * // Get one UserOTP
     * const userOTP = await prisma.userOTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userOTPFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, userOTPFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UserOTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOTPS
     * const userOTPS = await prisma.userOTP.findMany()
     *
     * // Get first 10 UserOTPS
     * const userOTPS = await prisma.userOTP.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userOTPWithIdOnly = await prisma.userOTP.findMany({ select: { id: true } })
     *
     */
    findMany<T extends userOTPFindManyArgs>(args?: Prisma.SelectSubset<T, userOTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UserOTP.
     * @param {userOTPCreateArgs} args - Arguments to create a UserOTP.
     * @example
     * // Create one UserOTP
     * const UserOTP = await prisma.userOTP.create({
     *   data: {
     *     // ... data to create a UserOTP
     *   }
     * })
     *
     */
    create<T extends userOTPCreateArgs>(args: Prisma.SelectSubset<T, userOTPCreateArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UserOTPS.
     * @param {userOTPCreateManyArgs} args - Arguments to create many UserOTPS.
     * @example
     * // Create many UserOTPS
     * const userOTP = await prisma.userOTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userOTPCreateManyArgs>(args?: Prisma.SelectSubset<T, userOTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UserOTPS and returns the data saved in the database.
     * @param {userOTPCreateManyAndReturnArgs} args - Arguments to create many UserOTPS.
     * @example
     * // Create many UserOTPS
     * const userOTP = await prisma.userOTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserOTPS and only return the `id`
     * const userOTPWithIdOnly = await prisma.userOTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userOTPCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, userOTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UserOTP.
     * @param {userOTPDeleteArgs} args - Arguments to delete one UserOTP.
     * @example
     * // Delete one UserOTP
     * const UserOTP = await prisma.userOTP.delete({
     *   where: {
     *     // ... filter to delete one UserOTP
     *   }
     * })
     *
     */
    delete<T extends userOTPDeleteArgs>(args: Prisma.SelectSubset<T, userOTPDeleteArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UserOTP.
     * @param {userOTPUpdateArgs} args - Arguments to update one UserOTP.
     * @example
     * // Update one UserOTP
     * const userOTP = await prisma.userOTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userOTPUpdateArgs>(args: Prisma.SelectSubset<T, userOTPUpdateArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UserOTPS.
     * @param {userOTPDeleteManyArgs} args - Arguments to filter UserOTPS to delete.
     * @example
     * // Delete a few UserOTPS
     * const { count } = await prisma.userOTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userOTPDeleteManyArgs>(args?: Prisma.SelectSubset<T, userOTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOTPS
     * const userOTP = await prisma.userOTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userOTPUpdateManyArgs>(args: Prisma.SelectSubset<T, userOTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UserOTPS and returns the data updated in the database.
     * @param {userOTPUpdateManyAndReturnArgs} args - Arguments to update many UserOTPS.
     * @example
     * // Update many UserOTPS
     * const userOTP = await prisma.userOTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserOTPS and only return the `id`
     * const userOTPWithIdOnly = await prisma.userOTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userOTPUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, userOTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UserOTP.
     * @param {userOTPUpsertArgs} args - Arguments to update or create a UserOTP.
     * @example
     * // Update or create a UserOTP
     * const userOTP = await prisma.userOTP.upsert({
     *   create: {
     *     // ... data to create a UserOTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOTP we want to update
     *   }
     * })
     */
    upsert<T extends userOTPUpsertArgs>(args: Prisma.SelectSubset<T, userOTPUpsertArgs<ExtArgs>>): Prisma.Prisma__userOTPClient<runtime.Types.Result.GetResult<Prisma.$userOTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UserOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPCountArgs} args - Arguments to filter UserOTPS to count.
     * @example
     * // Count the number of UserOTPS
     * const count = await prisma.userOTP.count({
     *   where: {
     *     // ... the filter for the UserOTPS we want to count
     *   }
     * })
    **/
    count<T extends userOTPCountArgs>(args?: Prisma.Subset<T, userOTPCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserOTPCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UserOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOTPAggregateArgs>(args: Prisma.Subset<T, UserOTPAggregateArgs>): Prisma.PrismaPromise<GetUserOTPAggregateType<T>>;
    /**
     * Group by UserOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userOTPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends userOTPGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: userOTPGroupByArgs['orderBy'];
    } : {
        orderBy?: userOTPGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, userOTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the userOTP model
     */
    readonly fields: userOTPFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for userOTP.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__userOTPClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the userOTP model
 */
export interface userOTPFieldRefs {
    readonly id: Prisma.FieldRef<"userOTP", 'String'>;
    readonly userId: Prisma.FieldRef<"userOTP", 'String'>;
    readonly email: Prisma.FieldRef<"userOTP", 'String'>;
    readonly expired: Prisma.FieldRef<"userOTP", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"userOTP", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"userOTP", 'DateTime'>;
}
/**
 * userOTP findUnique
 */
export type userOTPFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter, which userOTP to fetch.
     */
    where: Prisma.userOTPWhereUniqueInput;
};
/**
 * userOTP findUniqueOrThrow
 */
export type userOTPFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter, which userOTP to fetch.
     */
    where: Prisma.userOTPWhereUniqueInput;
};
/**
 * userOTP findFirst
 */
export type userOTPFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter, which userOTP to fetch.
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userOTPS to fetch.
     */
    orderBy?: Prisma.userOTPOrderByWithRelationInput | Prisma.userOTPOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userOTPS.
     */
    cursor?: Prisma.userOTPWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userOTPS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userOTPS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userOTPS.
     */
    distinct?: Prisma.UserOTPScalarFieldEnum | Prisma.UserOTPScalarFieldEnum[];
};
/**
 * userOTP findFirstOrThrow
 */
export type userOTPFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter, which userOTP to fetch.
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userOTPS to fetch.
     */
    orderBy?: Prisma.userOTPOrderByWithRelationInput | Prisma.userOTPOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userOTPS.
     */
    cursor?: Prisma.userOTPWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userOTPS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userOTPS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userOTPS.
     */
    distinct?: Prisma.UserOTPScalarFieldEnum | Prisma.UserOTPScalarFieldEnum[];
};
/**
 * userOTP findMany
 */
export type userOTPFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter, which userOTPS to fetch.
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userOTPS to fetch.
     */
    orderBy?: Prisma.userOTPOrderByWithRelationInput | Prisma.userOTPOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing userOTPS.
     */
    cursor?: Prisma.userOTPWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userOTPS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userOTPS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userOTPS.
     */
    distinct?: Prisma.UserOTPScalarFieldEnum | Prisma.UserOTPScalarFieldEnum[];
};
/**
 * userOTP create
 */
export type userOTPCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * The data needed to create a userOTP.
     */
    data: Prisma.XOR<Prisma.userOTPCreateInput, Prisma.userOTPUncheckedCreateInput>;
};
/**
 * userOTP createMany
 */
export type userOTPCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many userOTPS.
     */
    data: Prisma.userOTPCreateManyInput | Prisma.userOTPCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * userOTP createManyAndReturn
 */
export type userOTPCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * The data used to create many userOTPS.
     */
    data: Prisma.userOTPCreateManyInput | Prisma.userOTPCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * userOTP update
 */
export type userOTPUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * The data needed to update a userOTP.
     */
    data: Prisma.XOR<Prisma.userOTPUpdateInput, Prisma.userOTPUncheckedUpdateInput>;
    /**
     * Choose, which userOTP to update.
     */
    where: Prisma.userOTPWhereUniqueInput;
};
/**
 * userOTP updateMany
 */
export type userOTPUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update userOTPS.
     */
    data: Prisma.XOR<Prisma.userOTPUpdateManyMutationInput, Prisma.userOTPUncheckedUpdateManyInput>;
    /**
     * Filter which userOTPS to update
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * Limit how many userOTPS to update.
     */
    limit?: number;
};
/**
 * userOTP updateManyAndReturn
 */
export type userOTPUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * The data used to update userOTPS.
     */
    data: Prisma.XOR<Prisma.userOTPUpdateManyMutationInput, Prisma.userOTPUncheckedUpdateManyInput>;
    /**
     * Filter which userOTPS to update
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * Limit how many userOTPS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * userOTP upsert
 */
export type userOTPUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * The filter to search for the userOTP to update in case it exists.
     */
    where: Prisma.userOTPWhereUniqueInput;
    /**
     * In case the userOTP found by the `where` argument doesn't exist, create a new userOTP with this data.
     */
    create: Prisma.XOR<Prisma.userOTPCreateInput, Prisma.userOTPUncheckedCreateInput>;
    /**
     * In case the userOTP was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.userOTPUpdateInput, Prisma.userOTPUncheckedUpdateInput>;
};
/**
 * userOTP delete
 */
export type userOTPDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
    /**
     * Filter which userOTP to delete.
     */
    where: Prisma.userOTPWhereUniqueInput;
};
/**
 * userOTP deleteMany
 */
export type userOTPDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which userOTPS to delete
     */
    where?: Prisma.userOTPWhereInput;
    /**
     * Limit how many userOTPS to delete.
     */
    limit?: number;
};
/**
 * userOTP without action
 */
export type userOTPDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userOTP
     */
    select?: Prisma.userOTPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the userOTP
     */
    omit?: Prisma.userOTPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userOTPInclude<ExtArgs> | null;
};
//# sourceMappingURL=userOTP.d.ts.map