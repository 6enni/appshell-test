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
      <HvGrid item xs={12}>
        <HvTypography variant="title2">{t("page.title")}{userId}-{orgId}</HvTypography>
      </HvGrid>
      <HvGrid item xs={12}>
        <HvGlobalActions title={t("section.title")} variant="section" />
      </HvGrid>
    </HvGrid>
  );
};

export default withProvider(Example);
