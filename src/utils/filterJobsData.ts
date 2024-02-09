export const filterJobsData = (data: any, search: string) => {
  if (search) {
    return data?.filter(
      (c: any) =>
        (c.jobLocation &&
          c.jobLocation.toLowerCase().includes(search.toLowerCase())) ||
        (c.jobName && c.jobName.toLowerCase().includes(search.toLowerCase()))
    )
  }

  return data
}
