import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/a.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Thanaphat Tenghirun</h1>
        <p className="text-base">Software Engineer</p>
      </div>

      <div className="py-6 text-center">" Real genuine "</div>

      <div className="p-4 bg-blue-300 text-sm rounded-md">
        <p className="mb-4">
          <b>Age:</b> 20
        </p>
        <p className="mb-4">
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Bangkok
        </p>
      </div>

      <div className="p-4 bg-blue-300 text-sm rounded-md mt-4">
        <p className="mb-4">
          <a href="https://www.facebook.com/thanaphat.tenghirun.12/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700 mr-2" />
            Thanaphat Thr
          </a>
        </p>
        <p className="mb-4">
          <a href="https://www.instagram.com/russdee__/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-600 mr-2" />
            russdee__
          </a>
        </p>
        <p className="mb-4">
          <a href="mailto:Thanaphatgub@gmail.com" className="flex items-center">
            <FontAwesomeIcon icon={faConnectdevelop} className="text-red-600 mr-2" />
            Thanaphatgub@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
