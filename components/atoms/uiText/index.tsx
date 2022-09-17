import { NextPage } from "next";
import { UiTextProps } from "../../../types";

const UiText: NextPage<UiTextProps> = ({ text, className }) => {
  if (!text) {
    return null;
  }
  return text.map(
    (value: {
      annotations: {
        bold: any;
        code: any;
        color: any;
        italic: any;
        strikethrough: any;
        underline: any;
      };
      text: any;
    }) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text,
      } = value;
      return (
        <span
          key={text.content}
          className={`${className ? className : " w-full"} w-full`}>
          {text.content}
        </span>
      );
    }
  );
};

export default UiText;
