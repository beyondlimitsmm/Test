import { useQuery } from "@tanstack/react-query";

import HotelLogoBrown from "../../assets/logo-brown.png";
import { FlipText } from "../../components/FlipText";
import { handleScrollDownClick } from "../../utils";
import { about } from "../../api/home";
import { createAssetsUrl, parseCmsData } from "../../libs/functions";
import Error from "../../components/Error";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export const AboutUsSection = () => {
  const navigate = useNavigate();

  const { data, error } = useQuery({ queryKey: ["about"], queryFn: about });
  if (error) return <Error />;

  const cmsData = parseCmsData(data);

  return (
    <section
      id="aboutUs"
      className="xl:h-[75vh] bg-white flex flex-col xl:flex-row items-center justify-center container mx-auto py-14"
    >
      <div className="flex-[2.5] max-w-[80%] xl:max-w-[750px] xl:pr-40 text-center xl:text-left">
        <h2 className="typo-display mb-4 typo-text-black uppercase xl:text-[40px] text-[30px]">
          {cmsData?.title}
        </h2>
        <ReactMarkdown className="typo-body-2 typo-text-black mb-8 xl:text-[1rem] text-[16px] leading-[1.625rem] tracking-[0.02em]">
          {cmsData?.description}
        </ReactMarkdown>

        <button
          onClick={() => {
            if (cmsData?.button?.self)
              return handleScrollDownClick(cmsData?.button?.link);

            return navigate(cmsData?.button?.link);
          }}
          className="border-button"
        >
          {cmsData?.button?.title}
        </button>
      </div>
      <div className="divider xl:mx-10 xl:w-[2px] xl:h-[45vh] bg-[#D5D1D1]/40 w-[80%] h-[2px] my-10"></div>
      <div className="flex-1 flex flex-col items-center xl:max-w-[375px]">
        <div className="hidden xl:block w-[224px] h-[180px] mb-6">
          <img src={createAssetsUrl(cmsData?.logo)} alt="Logo" />
        </div>
        <div className="flex flex-col items-center gap-4 px-4 xl:px-8">
          <a href={`mailto:${cmsData?.contactInfo?.email}`}>
            <div className="flex gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.244 2.76139L21.772 7.6546C22.038 7.8275 22.171 7.91395 22.2674 8.02927C22.3527 8.13135 22.4167 8.24942 22.4558 8.37658C22.5 8.52022 22.5 8.67885 22.5 8.99611V16.3278C22.5 18.008 22.5 18.848 22.173 19.4898C21.8854 20.0543 21.4265 20.5132 20.862 20.8008C20.2202 21.1278 19.3802 21.1278 17.7 21.1278H7.3C5.61984 21.1278 4.77976 21.1278 4.13803 20.8008C3.57354 20.5132 3.1146 20.0543 2.82698 19.4898C2.5 18.848 2.5 18.008 2.5 16.3278V8.99611C2.5 8.67885 2.5 8.52022 2.54417 8.37658C2.58327 8.24942 2.64735 8.13135 2.73265 8.02927C2.82901 7.91395 2.96201 7.8275 3.22802 7.6546L10.756 2.76139M14.244 2.76139C13.6127 2.35108 13.2971 2.14592 12.957 2.0661C12.6564 1.99554 12.3436 1.99554 12.043 2.0661C11.7029 2.14592 11.3873 2.35108 10.756 2.76139M14.244 2.76139L20.4361 6.7863C21.124 7.2334 21.4679 7.45695 21.587 7.74045C21.6911 7.9882 21.6911 8.26742 21.587 8.51517C21.4679 8.79867 21.124 9.02222 20.4361 9.46932L14.244 13.4942C13.6127 13.9045 13.2971 14.1097 12.957 14.1895C12.6564 14.2601 12.3436 14.2601 12.043 14.1895C11.7029 14.1097 11.3873 13.9045 10.756 13.4942L4.56386 9.46932C3.87601 9.02222 3.53209 8.79867 3.41297 8.51517C3.30888 8.26742 3.30888 7.9882 3.41297 7.74045C3.53209 7.45695 3.87601 7.2334 4.56386 6.7863L10.756 2.76139M22 19.1278L15.3572 13.1278M9.64282 13.1278L3 19.1278"
                  stroke="#E7DAD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <FlipText
                text={cmsData?.contactInfo?.email}
                textStyles={"text-left typo-body-2"}
              />
            </div>
          </a>
          <a href={`tel:${cmsData?.contactInfo?.phone}`}>
            <div className="flex gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5497 6.12793C15.5264 6.3185 16.424 6.79619 17.1277 7.49987C17.8314 8.20354 18.3091 9.10119 18.4997 10.0779M14.5497 2.12793C16.5789 2.35337 18.4713 3.2621 19.9159 4.70494C21.3606 6.14777 22.2717 8.03894 22.4997 10.0679M10.7266 13.991C9.52506 12.7894 8.57627 11.4308 7.88028 9.98116C7.82041 9.85647 7.79048 9.79412 7.76748 9.71523C7.68576 9.43488 7.74446 9.09062 7.91447 8.85319C7.96231 8.78638 8.01947 8.72922 8.13378 8.61491C8.48338 8.2653 8.65819 8.0905 8.77247 7.91472C9.20347 7.25183 9.20347 6.39725 8.77247 5.73436C8.65819 5.55858 8.48338 5.38378 8.13378 5.03417L7.93891 4.8393C7.40747 4.30786 7.14174 4.04214 6.85636 3.8978C6.2888 3.61073 5.61854 3.61073 5.05098 3.8978C4.7656 4.04214 4.49987 4.30786 3.96843 4.8393L3.8108 4.99694C3.28117 5.52656 3.01636 5.79137 2.81411 6.15141C2.58969 6.55091 2.42833 7.1714 2.4297 7.62963C2.43092 8.04257 2.51103 8.3248 2.67124 8.88924C3.53221 11.9226 5.15668 14.785 7.54466 17.173C9.93264 19.561 12.795 21.1854 15.8284 22.0464C16.3928 22.2066 16.6751 22.2867 17.088 22.2879C17.5462 22.2893 18.1667 22.1279 18.5662 21.9035C18.9263 21.7013 19.1911 21.4365 19.7207 20.9068L19.8783 20.7492C20.4098 20.2178 20.6755 19.952 20.8198 19.6667C21.1069 19.0991 21.1069 18.4288 20.8198 17.8613C20.6755 17.5759 20.4098 17.3102 19.8783 16.7787L19.6835 16.5839C19.3339 16.2343 19.1591 16.0595 18.9833 15.9452C18.3204 15.5142 17.4658 15.5142 16.8029 15.9452C16.6271 16.0595 16.4523 16.2343 16.1027 16.5839C15.9884 16.6982 15.9313 16.7553 15.8644 16.8032C15.627 16.9732 15.2828 17.0319 15.0024 16.9502C14.9235 16.9272 14.8612 16.8972 14.7365 16.8374C13.2869 16.1414 11.9282 15.1926 10.7266 13.991Z"
                  stroke="#E7DAD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <FlipText
                text={cmsData?.contactInfo?.phone}
                textStyles={"typo-body-2"}
              />
            </div>
          </a>
          <a
            href={cmsData?.contactInfo?.location?.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-150"
              >
                <path
                  d="M12 12.6279C13.6569 12.6279 15 11.2848 15 9.62793C15 7.97108 13.6569 6.62793 12 6.62793C10.3431 6.62793 9 7.97108 9 9.62793C9 11.2848 10.3431 12.6279 12 12.6279Z"
                  stroke="#E7DAD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22.1279C14 18.1279 20 15.5462 20 10.1279C20 5.70965 16.4183 2.12793 12 2.12793C7.58172 2.12793 4 5.70965 4 10.1279C4 15.5462 10 18.1279 12 22.1279Z"
                  stroke="#E7DAD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="typo-body-2 text-center hover:text-hoverPale">
                {/* No 129, Inya Road, Kamayut Township{" "}
                <br className="2xl:hidden" />
                Yangon, Myanmar */}
                {cmsData?.contactInfo?.location?.name}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
