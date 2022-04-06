import inputStandardLabel from "theme/components/input/inputStandard/inputStandardLabel";
import inputStandardColors from "theme/components/input/inputStandard/inputStandardColors";
import inputStandardLabelColors from "theme/components/input/inputStandard/inputStandardLabelColors";

const inputStandard = {
  base: {
    input: {
      borderWidth: "border-b",
      borderColor: "placeholder-shown:border-blue-grey-200",
    },
    label: inputStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-11",
      },
      input: {
        fontSize: "text-sm",
        pt: "pt-4",
        pb: "pb-1.5",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.25]",
      },
    },
    lg: {
      container: {
        height: "h-12",
      },
      input: {
        fontSize: "text-sm",
        px: "px-px",
        pt: "pt-5",
        pb: "pb-2",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.875]",
      },
    },
  },
  colors: {
    input: inputStandardColors,
    label: inputStandardLabelColors,
  },
  error: {
    input: {
      borderColor: "border-red-500 placeholder-shown:border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    label: {
      color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
      after: "after:border-red-500 peer-focus:after:border-red-500",
    },
  },
  success: {
    input: {
      borderColor: "border-green-500 placeholder-shown:border-green-500",
      borderColorFocused: "focus:border-green-500",
    },
    label: {
      color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
      after: "after:border-green-500 peer-focus:after:border-green-500",
    },
  },
};

export default inputStandard;
