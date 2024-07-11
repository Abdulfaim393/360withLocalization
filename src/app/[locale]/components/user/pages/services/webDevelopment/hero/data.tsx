"use client";
import { useTranslation } from "react-i18next";

export const UseTitle: any = () => {
  const { t } = useTranslation();
  return <>{t("webDevelopment:bannerHeading")}</>;
};
