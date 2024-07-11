"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import { HeadTypo, MainBox, SubTittleTypo } from "./styled";
import { useTranslation } from "react-i18next";

const OverView = () => {
  const { t } = useTranslation();
  const para = [
    t("webDevelopment:overview.overviewParaOne"),
    t("webDevelopment:overview.overviewParaTwo"),
    t("webDevelopment:overview.overviewParaThree"),
  ];
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypo variant="h4" gutterBottom>
          {t("webDevelopment:overview.overviewHeading")}
        </HeadTypo>
        {para.map((item, index) => (
          <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
            {item}
          </SubTittleTypo>
        ))}
      </Container>
    </MainBox>
  );
};

export default OverView;
