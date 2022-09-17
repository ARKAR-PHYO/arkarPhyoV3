import Image from "next/image";
import ArkarPhyoProfile from "../../../public/images/Frame2.png";
import PagesLayout from "../pagesLayout";

const About = () => {
  return (
    <PagesLayout pageTitle={"About Me"}>
      <div className="relative flex flex-col items-center mt-5 md:flex-row">
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          doloremque error, quibusdam officiis quia quam quidem ad fugit nostrum
          harum explicabo a vero sequi eaque facilis consequuntur quo obcaecati,
          modi nobis laborum excepturi atque suscipit aut nulla. A autem
          repellat ratione magni maiores voluptates ullam praesentium corrupti
          sit reprehenderit quaerat dolorum est ut, quasi enim eum, ea et sint
          mollitia, corporis quis deleniti repudiandae. Quas dolor nostrum culpa
          praesentium velit deserunt perferendis eius alias consequatur sequi
          pariatur nobis, fuga provident corrupti. Esse non neque iure beatae
          nisi velit numquam cum exercitationem rerum, dicta laudantium nulla
          dolorem omnis ea expedita eum.
        </p>
        <div className="right-0 w-48 h-auto lg:absolute lg:bottom-6 lg:w-96 md:w-72">
          <Image
            className=""
            src={ArkarPhyoProfile}
            alt="Arkar Phyo"
            layout="responsive"
          />
        </div>
      </div>
    </PagesLayout>
  );
};
export default About;
