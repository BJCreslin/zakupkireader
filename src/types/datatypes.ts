
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

export type ProcedureType = {
    id: string,
    needed: boolean,
    uin: string
}

export type RepairsType= Array<RepairType>|null | undefined
