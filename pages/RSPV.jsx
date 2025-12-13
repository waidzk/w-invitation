import Decoration from "../components/Decoration";
import { useState } from "react";
import supabase from "../src/supabase-client";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function RSPV({ guestName }) {
  const [listData, setListData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [comment, setComment] = useState({
    name: "",
    group: "",
    phone_number: "",
    isComing: true,
    comment: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(listData);
  }, [listData]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("RSVP_Novar").select("*");
    if (error) {
      console.log("Error: ", error);
    } else {
      setListData(data);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data dikirim:", comment);
    // bisa tambahkan API call atau logic lain
    const { data, error } = await supabase
      .from("RSVP_Novar")
      .insert([comment])
      .single();

    if (error) {
      console.error("Error: ", error);
    } else {
      setListData((prev) => [...prev, comment]);
      setComment({
        name: "",
        group: "",
        phone_number: "",
        isComing: true,
        comment: "",
      });
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  useGSAP(() => {
    gsap.from(".transition-from-bottom", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      stagger: 0.2,
      ease: "power1.inOut",
    });

    gsap.from(".transition-from-top", {
      opacity: 0,
      duration: 1.2,
      y: -30,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center pt-14 h-[calc(100vh-110px)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <h1 className="javassoul text-3xl text-[#AA873C] mb-4 transition-from-top">
              RSVP
            </h1>
            <div className="px-2 pb-10 md:w-full md:px-16">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col gap-1 w-full text-[#AA873C] mb-3 transition-from-bottom">
                  <label htmlFor="name" className="text-sm font-bold">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={guestName}
                    value={comment.name}
                    onChange={handleChange}
                    className="border border-[#AA873C] rounded-md px-2 py-1"
                    placeholder="Tuliskan nama Anda di sini"
                    required
                  />
                </div>

                {/* Group */}
                <div className="flex flex-col gap-1 w-full text-[#AA873C] mb-4 transition-from-bottom">
                  <label htmlFor="group" className="text-sm font-bold">
                    Asal
                  </label>
                  <input
                    type="text"
                    id="group"
                    value={comment.group}
                    onChange={handleChange}
                    className="border border-[#AA873C] rounded-md px-2 py-1"
                    placeholder="Tuliskan kota/daerah asal Anda"
                    required
                  />
                </div>

                {/* Kehadiran */}
                <div className="flex items-center justify-between gap-2 text-[#AA873C] mb-4 transition-from-bottom">
                  <p className="text-sm font-bold">Tidak Hadir</p>
                  <div className="checkbox-wrapper-5 h-[40px]">
                    <div className="check">
                      <input
                        id="check-5"
                        type="checkbox"
                        checked={comment.isComing}
                        onChange={(e) =>
                          setComment((prev) => ({
                            ...prev,
                            isComing: e.target.checked,
                          }))
                        }
                      />
                      <label htmlFor="check-5"></label>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Hadir</p>
                </div>

                {/* Comment */}
                <div className="flex flex-col gap-1 w-full text-[#AA873C] mb-4 transition-from-bottom">
                  <label htmlFor="comment" className="text-sm font-bold">
                    Komentar atau Ucapan
                  </label>
                  <textarea
                    id="comment"
                    value={comment.comment}
                    onChange={handleChange}
                    className="border border-[#AA873C] rounded-md px-2 py-1 h-24"
                    placeholder="Ketik ucapanmu untuk mempelai"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-2 bg-[#AA873C] rounded-full text-white mb-5 transition-from-bottom text-sm"
                >
                  Kirim
                </button>
              </form>

              <hr className="border-[#AA873C] transition-from-bottom" />

              {/* LIST CARDS */}
              <div className="flex flex-col gap-2 my-5">
                {listData
                  .slice() // copy biar tidak mutasi state asli
                  .reverse() // urutkan terbalik
                  .slice(0, visibleCount) // ambil sesuai limit
                  .map((data, i) => (
                    <div
                      key={i}
                      className="border border-[#AA873C] bg-red-900 text-[#cca757] rounded-md py-2 px-3 transition-from-bottom"
                    >
                      <div className="flex items-center justify-between w-full">
                        <h5 className="text-sm font-semibold">{data.name}</h5>
                        <span className="text-sm">
                          {data.isComing ? "Hadir" : "Tidak Hadir"}
                        </span>
                      </div>
                      <hr className="border-[#AA873C] my-2" />
                      <p className="text-justify text-sm font-light">
                        {data.comment}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Load More Button */}
              {visibleCount < listData.length && (
                <button
                  onClick={handleLoadMore}
                  className="mx-auto block px-4 py-2 bg-[#AA873C] text-white rounded-lg hover:bg-[#8a6d2f] transition"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSPV;
