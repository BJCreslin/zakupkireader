export type RepairType = {
    id: string,
    needed: null | boolean,
    lawNumber: string,
    author: string,
    placementPhase: string,
    posted: string,
    updated: string,
    initialContractprice: string,
    name: string
    placementStages: string,
    link: string,
    uin: string
}

export type SaveRepairType = {
    id: string,
    uin: string,
    name: string,
    tradingPlatformName: string,
    sponsorName: string,
    deadline: Date,
    reviewDeadline: Date,
    auctionDate: Date,
    maximumContractPrice: number
}

export type SaveRepairTypes = Array<SaveRepairType> | null | undefined

export type ProcedureType = {
    id: string,
    needed: boolean,
    uin: string
}

export type RepairsType = Array<RepairType> | null | undefined

export type PageType = {
    pageNumber: number,
    pageSize: number
}
