import Link from "next/link";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../services/lang-service";

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout title="Tuful | Helping Children Thrive">
      <div>
        <button
          className="m-2 p-2 border-gray-500 "
          onClick={() => ChangeLanguage("en")}
        >
          English(UK)
        </button>
        <button
          className="m-2 p-2 border-gray-500 "
          onClick={() => ChangeLanguage("ar")}
        >
          العربية
        </button>
      </div>
      <h1 className="text-2xl">{t("test")} - welcome baby starter ..</h1>
    </Layout>
  );
};

export default IndexPage;
