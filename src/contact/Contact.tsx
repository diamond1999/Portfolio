import Header from "../components/Header";
import ContactForm from "./ContactForm";
import { LinkedinOutlined, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="xl:mx-28">
      <div className="xl:max-h-screen md:max-h-screen w-full">
        <Header />
      </div>

      <div className="sm:mx-3 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-28 mt-8">
      
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <h3 className="text-2xl font-medium text-green-400 mb-6">Social links:</h3>

        <Link to={"mailto:ajibolaoladapo9744@gmail.com"} className="flex items-center gap-4 hover:text-green-400 mb-4">
          <MailOutlined />
          <p>ajibolaoladapo9744@gmail.com</p>
        </Link>

        <Link to={"https://wa.me/+2348164049744"} className="flex items-center gap-4 hover:text-green-400 mb-4">
          <WhatsAppOutlined />
          <p>Whatsapp</p>
        </Link>

        <Link
          to={"https://linkedin.com/in/ajibola-oladapo-625b6b22b"}
          className="flex items-center gap-4 hover:text-green-400 overflow-hidden"
        >
          <LinkedinOutlined />
          <p>LinkedIn</p>
        </Link>
      </div>

      
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 p-8 border border-opacity-25 border-green-400 rounded-xl">
        <h2 className="text-2xl font-medium text-green-400 mb-4">Let's work together</h2>
        <p className="mb-6">
          Want to collaborate, ask a question, or just connect? I’d love to hear from you—let's chat!
        </p>
        <ContactForm />
      </div>
    </div>
    </div>
  );
};

export default Contact;
