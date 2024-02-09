export const filterCandidatesData = (data: any, search: string) => {
  if (search) {
    return data?.filter(
      (c: any) =>
        (c.candidateLocation &&
          c.candidateLocation.toLowerCase().includes(search.toLowerCase())) ||
        (c.candidateName &&
          c.candidateName.toLowerCase().includes(search.toLowerCase())) ||
        (c.candidateReference &&
          c.candidateReference.toLowerCase().includes(search.toLowerCase()))
    )
  }

  return data
}
