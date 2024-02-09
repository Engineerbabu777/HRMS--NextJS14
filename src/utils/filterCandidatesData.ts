


export const filterCandidatesData = (data:any,search:string) => {

    if(search){
        return data?.filter((c:any) => c.candidateLocation.includes(search) || c.candidateLocation.includes(search) || c.candidateLocation.includes(search) )
    }

    return data;
}