import { useParams } from "react-router-dom";
import BlogPlaceHolder from "../../assets/images/blog-placeholder.png";
import sharedSvg from "../../assets/images/share.svg";

const ArticleDetailPage = () => {
  const { id } = useParams();
  return (
    <section className="container mx-auto px-4 xl:px-0 mb-10 xl:mb-[120px] xl:mt-20">
      <div className="flex gap-20">
        <h6 className="font-Lato text-3xl font-medium leading-[150%] my-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          ratione dolor minus eligendi.
        </h6>
        <div className="hidden container my-6 xl:mx-auto xl:max-w-[400px] xl:block"></div>
      </div>

      <div className="flex flex-col xl:flex-row gap-20">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute bottom-7 right-7 z-10">
              <img src={sharedSvg} alt="Share" />
            </div>

            <img
              src={BlogPlaceHolder}
              alt=""
              className="w-full object-contain mb-4"
            />
            <div className="overlay absolute inset-0"></div>
          </div>

          <div className="flex flex-col gap-6 justify-between">
            <p className="font-Lato text-lg font-normal leading-[150%]">
              Lorem ipsum dolor sit amet consectetur. Sodales tincidunt dui nibh
              venenatis nibh proin fermentum. Accumsan id ultricies habitasse
              duis. Sed augue cursus nulla nec sit a lacus sit. Et id mauris
              tempus nam ut sit sapien ornare. Mauris sed id duis fringilla
              consectetur purus ac.
            </p>

            <p className="font-Lato text-lg font-normal leading-[150%]">
              Lorem ipsum dolor sit amet consectetur. Sodales tincidunt dui nibh
              venenatis nibh proin fermentum. Accumsan id ultricies habitasse
              duis. Sed augue cursus nulla nec sit a lacus sit. Et id mauris
              tempus nam ut sit sapien ornare. Mauris sed id duis fringilla
              consectetur purus ac.
            </p>
            <p className="font-Lato text-lg font-normal leading-[150%]">
              Lorem ipsum dolor sit amet consectetur. Sodales tincidunt dui nibh
              venenatis nibh proin fermentum. Accumsan id ultricies habitasse
              duis. Sed augue cursus nulla nec sit a lacus sit. Et id mauris
              tempus nam ut sit sapien ornare. Mauris sed id duis fringilla
              consectetur purus ac.
            </p>
          </div>
        </div>

        <div className="container mb-6 xl:mx-auto xl:max-w-[400px]">
          <h4 className="font-Lato text-3xl font-normal leading-3 mb-6">
            Interesting Articles
          </h4>
          <div className="flex flex-col gap-6">
            <div className="h-[120px] flex items-start py-4">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px] h-full"
              />
              <div className="px-4 flex flex-col h-full justify-between pb-1">
                <h6
                  className="typo-body-2 !text-lg multi-elli"
                  style={{ "--max-line": 1 }}
                >
                  Lorem ipsum dolor sit amet
                </h6>
                <p className="multi-elli text-slate-900/75">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil similique cum reiciendis placeat porro commodi laborum
                  consectetur hic illo officiis?
                </p>
              </div>
            </div>
            <div className="h-[120px] flex items-start py-4">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px] h-full"
              />
              <div className="px-4 flex flex-col h-full justify-between pb-1">
                <h6
                  className="typo-body-2 !text-lg multi-elli"
                  style={{ "--max-line": 1 }}
                >
                  Lorem ipsum dolor sit amet
                </h6>
                <p className="multi-elli text-slate-900/75">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil similique cum reiciendis placeat porro commodi laborum
                  consectetur hic illo officiis?
                </p>
              </div>
            </div>{" "}
            <div className="h-[120px] flex items-start py-4">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px] h-full"
              />
              <div className="px-4 flex flex-col h-full justify-between pb-1">
                <h6
                  className="typo-body-2 !text-lg multi-elli"
                  style={{ "--max-line": 1 }}
                >
                  Lorem ipsum dolor sit amet
                </h6>
                <p className="multi-elli text-slate-900/75">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil similique cum reiciendis placeat porro commodi laborum
                  consectetur hic illo officiis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ArticleDetailPage;
