/**
 * @type {import('flowbite-react').FlowbiteTheme}
 */
const theme = {
  button: {
    base: "button",
    size: {
      md: "text-base font-semibold px-8 py-3 leading-1.5",
      lg: "text-lg font-semibold px-8 py-4 leading-1.5",
    },
    color: {
      info: "!border-0 text-white bg-blue-700 focus:!ring-0 disabled:hover:bg-blue-700",
    },
    outline: {
      color: {
        light: "border-neutral3",
      },
    },
  },
  formControls: {
    helperText: {
      base: "mt-2 text-xs font-medium",
      colors: {
        gray: "text-gray-500",
        failure: "text-[#CC0001]",
      },
    },
    textInput: {
      field: {
        input: {
          sizes: {
            md: "px-4 py-3 text-sm",
          },
          colors: {
            gray: "bg-neutral55 border-transparent text-neutral2 placeholder:text-neutral4 focus:ring-0",
            failure:
              "bg-neutral55 border-[#CC0001] text-neutral2 placeholder-red-700 focus:border-red-500 focus:ring-red-500",
          },
        },
      },
    },
    radio: {
      base: "h-4 w-4 border border-2 border-neutral2 focus:ring-2 focus:ring-blue-500",
    },
  },

  sidebar: {
    inner:
      "rounded-lg h-full lg:h-[648px] overflow-y-auto overflow-x-hidden bg-[#1A1A1A] p-5 md:px-[28px] md:pt-[60px] text-neutral6",
    item: {
      base: "h-[48px] flex items-center justify-center rounded-lg p-2 mt-6 text-base text-neutral6 hover:bg-[#333333] rounded-lg",
      active: "bg-[#333333] font-bold",
    },
  },
  avatar: {
    img: {
      on: "w-18 h-18 md:w-[128px] md:h-[128px]",
    },
  },

  tab: {
    tablist: {
      styles: {
        light: "tabs flex-wrap -mb-px border-b border-[#7D7D7D]",
      },
      tabitem: {
        base: "flex items-center justify-center text-base font-semibold first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400",

        styles: {
          light: {
            // TODO: This may be a bug in Flowbite.
            "flex-grow flex-shrink-1 px-2 pb-3 outline-0": true,
            active: {
              on: "text-primary border-b border-primary active",
              off: "text-white hover:text-white border-b border-transparent hover:border-gray-300",
            },
          },
        },
      },
    },
    tabpanel: "p-0",
  },

  modal: {
    content: {
      base: "relative h-auto w-auto md:h-auto md:max-w-2xl max-w-2xl",
      inner: "relative rounded-xl",
    },
    body: {
      base: "p-6",
      popup: "",
    },
  },
};

export default theme;
