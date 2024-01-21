import { TiTick } from "react-icons/ti";
import tab1 from "../../assets/images/tab1.jpg";
import tab2 from "../../assets/images/tab2.jpg";
import tab3 from "../../assets/images/tab3.jpg";

const Services = () => {
  return (
    <div className="w-[100%] lg:w-[1300px] p-5 lg:p-0 mx-auto my-20">
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <div className="flex-1 m-auto">
          <div className="w-[100%] lg:w-[30rem]">
            <h3 className="text-4xl text-[#21286a] font-semibold">
              Browse Hundreds of Jobs
            </h3>
            <p className="text-[#21286a] leading-7 my-7">
              To start searching for jobs, you can attend job fairs online or in
              person, use job boards and career websites or reach out directly
              to recruiters in a targeted company to broaden your network.
            </p>
            <div className="">
              <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span
                    className="ml-2 truncate"
                    title="Test with a very really long name (resize the browser to see it truncate)"
                  >
                    Bring to the table win-win survival
                  </span>
                </li>
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    Capitalize on low hanging fruit to identify
                  </span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    But I must explain to you how all this
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={tab1} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row-reverse">
        <div className="flex-1 m-auto flex justify-end">
          <div className="w-[100%] lg:w-[30rem]">
            <h3 className="text-4xl text-[#21286a] font-semibold">
            Find Your
Match
            </h3>
            <p className="text-[#21286a] leading-7 my-7">
            An efficient resume should promote your abilities and include tangible accomplishments that are relevant to the job you apply for. You should also prepare a cover letter that is concise and elaborates on how you can put your skills to use in the organization.
            </p>
            <div className="">
              <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span
                    className="ml-2 truncate"
                    title="Test with a very really long name (resize the browser to see it truncate)"
                  >
                    Bring to the table win-win survival
                  </span>
                </li>
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    Capitalize on low hanging fruit to identify
                  </span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    But I must explain to you how all this
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={tab2} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <div className="flex-1 m-auto">
          <div className="w-[100%] lg:w-[30rem]">
            <h3 className="text-4xl text-[#21286a] font-semibold ">
            Apply
Directly
            </h3>
            <p className="text-[#21286a] leading-7 my-7">
            An efficient resume should promote your abilities and include tangible accomplishments that are relevant to the job you apply for. You should also prepare a cover letter that is concise and elaborates on how you can put your skills to use in the organization.
            </p>
            <div className="">
              <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span
                    className="ml-2 truncate"
                    title="Test with a very really long name (resize the browser to see it truncate)"
                  >
                    Bring to the table win-win survival
                  </span>
                </li>
                <li className="mb-3 flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    Capitalize on low hanging fruit to identify
                  </span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-2xl font-normal" />
                  <span className="ml-2 truncate">
                    But I must explain to you how all this
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={tab3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
