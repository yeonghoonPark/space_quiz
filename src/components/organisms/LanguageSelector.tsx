import { MouseEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import css from "./LanguageSelector.module.less";

const LANGUAGE_OPTIONS = [
  { code: "en", text: "English" },
  { code: "ko", text: "Korean" },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const code = e.currentTarget.dataset.code;

      if (code) i18n.changeLanguage(code);
    },
    [i18n]
  );

  return (
    <Container className={css.container}>
      {LANGUAGE_OPTIONS.map(({ code, text }) => (
        <Button data-code={code} key={code} onClick={toggleLanguage} text={t(text)} />
      ))}
    </Container>
  );
};

export default LanguageSelector;
