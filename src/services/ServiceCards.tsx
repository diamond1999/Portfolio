import { ArrowRightOutlined } from "@ant-design/icons";

const ServiceCards = () => {
  return (
    <div className="text-white mt-20 grid grid-cols-2 gap-4 mx-28 ">
      <div className="border-green-100 rounded-2xl border p-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold">01</p>
          <ArrowRightOutlined className="border rounded-full p-3 rotate-45 text-black bg-white" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            fugiat{" "}
          </p>
        </div>
      </div>
      <div className="border-green-100 rounded-2xl border p-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold">02</p>
          <ArrowRightOutlined className="border rounded-full p-3 rotate-45 text-black bg-white" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">UI/UX Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            fugiat{" "}
          </p>
        </div>
      </div>
      <div className="border-green-100 rounded-2xl border p-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold">03</p>
          <ArrowRightOutlined className="border rounded-full p-3 rotate-45 text-black bg-white" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Logo Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            fugiat{" "}
          </p>
        </div>
      </div>
      <div className="border-green-100 rounded-2xl border p-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold">04</p>
          <ArrowRightOutlined className="border rounded-full p-3 rotate-45 text-black bg-white" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Music</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            fugiat{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
