export type IMemberFields = {
  searchTerm?: String | undefined;
  name?: String | undefined;
  email?: String | undefined;
  phone?: String | undefined;
  membershipDate?: String | undefined;
};

export type IMemberDataReq = {
  name?: String | null;
  email?: String | null;
  phone?: String | null;
};
