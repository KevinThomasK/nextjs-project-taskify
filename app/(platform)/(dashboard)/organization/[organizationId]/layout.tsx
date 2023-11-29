import { OrgControll } from "./_components/org-control";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControll />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
