import { useParams } from "react-router-dom";
import BlogPlaceHolder from "../../assets/images/blog-placeholder.png";
import sharedSvg from "../../assets/images/share.svg";

const ArticleDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto mb-[120px]">
      <h2 className="mt-4 mb-6 text-center">
        Home &gt; Articles for you &gt; Detail
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
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

          <h6 className="font-Lato text-xl font-medium leading-[150%] my-8">
            Lorem ipsum dolor sit amet consecteturjgr9hgirg consectet urj gr
            Lorem ipsum
          </h6>

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

        <div className="container my-6 mx-auto max-w-[400px]">
          <h4 className="font-Lato text-3xl font-normal leading-3 mb-6">
            Interesting Articles
          </h4>
          <div className="flex flex-col gap-6">
            <div className="h-[120px] flex items-center">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px]"
              />
              <div className="p-4">
                <p className="font-Lato text-lg font-normal leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur jgr9hgirg Lorem ipsum
                </p>
              </div>
            </div>

            <div className="h-[120px] flex items-center">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px]"
              />
              <div className="p-4">
                <p className="font-Lato text-lg font-normal leading-[150%] break-words">
                  Lorem ipsum dolor sit amet consectetur jgr9hgirg Lorem ipsum
                </p>
              </div>
            </div>

            <div className="h-[120px] flex items-center">
              <img
                src={BlogPlaceHolder}
                alt="PlaceHolder"
                className="w-[120px]"
              />
              <div className="p-4">
                <p className="font-Lato text-lg font-normal leading-[150%] break-words">
                  Lorem ipsum dolor sit amet consectetur jgr9hgirg Lorem ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleDetailPage;
