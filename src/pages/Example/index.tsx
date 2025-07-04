import { useTranslation } from "react-i18next";
import {
  HvGlobalActions,
  HvGrid,
  HvTypography,
} from "@hitachivantara/uikit-react-core";
import { withProvider } from "../../providers/Provider";
import { useUserContext } from "../../providers/UserCtxprovider";

const Example = () => {
  const { t } = useTranslation("example");
  const { userId, orgId } = useUserContext();
  console.log("User ID:", userId);
  console.log("Org ID:", orgId);


  return (
    <HvGrid container>
       <HvGrid item >{t("page.title")}</HvGrid>
      <HvGrid item container flexDirection={"column"} xs={12}>
         <HvGrid item >{'UserId - ' + userId}</HvGrid>
         <HvGrid item >{'OrgId - ' + orgId}</HvGrid>
      </HvGrid>
      <HvGrid item xs={12}>
        <HvGlobalActions title={t("section.title")} variant="section" />
      </HvGrid>
    </HvGrid>
  );
};

export default withProvider(Example);
