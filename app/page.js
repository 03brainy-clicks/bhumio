import FileUpload from "@/components/FileUpload";
import ContextWrapper from "@/context/ContextWrapper";
import React from "react";

const Page = () => {
  return (
    <>
      <ContextWrapper>
        <div className="py-12">
          <div className="w-10/12 mx-auto">
            <div className="mb-5">
              <h2 className="text-4xl font-bold mb-3">
                Welcome to
                <span className="text-bhumio-primary"> CreativeDesigns</span>
              </h2>
              {/* <p className="w-1/2 text-gray-500">
                We're your gateway to captivating designs. Our creative experts
                turn ideas into striking visuals. Collaborate with us for
                stunning, on-time design solutions. Explore our portfolio and
                let's make your vision a reality. Contact us today for a free
                consultation.
              </p> */}
            </div>
            <FileUpload />
          </div>
        </div>
      </ContextWrapper>
    </>
  );
};

export default Page;
