import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganisationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganisationIdPage;
