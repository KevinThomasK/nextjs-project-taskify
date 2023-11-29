import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganisationIdPage = () => {
  const { userId, orgId } = auth();
  return <div>organisation page</div>;
};

export default OrganisationIdPage;
