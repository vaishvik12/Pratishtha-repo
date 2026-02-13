const { useState, useEffect } = React;

/* 🎵 Global Background Music */
const audio = new Audio("01 - Victor Lundberg - We Are Meant To Be.m4a");
audio.loop = true;
audio.volume = 0.3;
audio.play().catch(() => {});

function GifBox({ src }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="bg-gray-200 rounded-lg inline-block overflow-hidden max-w-[70vw] max-h-[40vh]">
        <img
          src={src}
          alt="gif"
          className="block w-full h-auto rounded-lg"
          style={{ maxHeight: "40vh" }}
        />
      </div>
    </div>
  );
}

/* 🌸 Falling Flowers Component */
function FallingFlowers() {
  const flowers = Array.from({ length: 25 });

  return (
    <div className="flower-container">
      {flowers.map((_, i) => (
        <div
          key={i}
          className="flower"
          style={{
            left: Math.random() * 100 + "vw",
            animationDelay: Math.random() * 5 + "s",
            fontSize: 16 + Math.random() * 16 + "px"
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}

let noClick = 1;

function ValentineProposal() {
  const [page, setPage] = useState('landing');
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const media = [
    { type: "image", src: "images/3.jpg" },
    { type: "image", src: "images/2.jpg" },
    { type: "image", src: "images/3.5.jpg" },
    { type: "image", src: "images/1.jpg" },
    { type: "video", src: "images/4.5.mp4" },
    { type: "video", src: "images/4.8.mp4" },
    { type: "video", src: "images/4.9.mp4" },
    { type: "video", src: "images/4.52.mp4" },
    { type: "image", src: "images/4.jpg" },
    { type: "image", src: "images/5.PNG" },
    { type: "image", src: "images/6.jpg" },
    { type: "image", src: "images/7.jpg" },
    { type: "video", src: "images/8.mp4" },
    { type: "image", src: "images/9.jpg" },
    { type: "image", src: "images/10.jpg" },
    { type: "image", src: "images/11.jpg" },
    { type: "image", src: "images/12.jpg" },
    { type: "image", src: "images/14.jpg" },
    { type: "video", src: "images/14.mp4" },
    { type: "video", src: "images/15.mp4" },
    { type: "video", src: "images/16.5.mp4" },
    { type: "video", src: "images/16.mp4" },
    { type: "image", src: "images/17.JPEG" },
    { type: "image", src: "images/18.png" },
    { type: "image", src: "images/19.png" },
    { type: "image", src: "images/20.png" },
    { type: "image", src: "images/21.png" },
    { type: "image", src: "images/22.png" },
    { type: "image", src: "images/23.png" },
    { type: "image", src: "images/24.png" },
    { type: "image", src: "images/25.png" },
    { type: "image", src: "images/26.png" },
    { type: "video", src: "images/27.MP4" },
    { type: "image", src: "images/28.5.jpg" },
    { type: "image", src: "images/28.jpg" },
    { type: "image", src: "images/29.JPG" },
    { type: "image", src: "images/30.5.jpg" },
    { type: "video", src: "images/30.mp4" },
    { type: "video", src: "images/31.mp4" },
    { type: "video", src: "images/32.mp4" },
    { type: "video", src: "images/33.5.mp4" },
    { type: "video", src: "images/33.mp4" },
    { type: "video", src: "images/34.mp4" },
    { type: "video", src: "images/35.mp4" },
    { type: "image", src: "images/36.jpg" },
    { type: "image", src: "images/37.JPG" },
    { type: "video", src: "images/38.MOV" },
    { type: "video", src: "images/39.5.MP4" },
    { type: "image", src: "images/39.JPG" },
    { type: "video", src: "images/40.MP4" },
    { type: "image", src: "images/50.JPG" },
    { type: "image", src: "images/51.PNG" },
    { type: "image", src: "images/52.PNG" },
    { type: "image", src: "images/53.PNG" },
    { type: "image", src: "images/54.PNG" },
    { type: "video", src: "images/55.MP4" },
    { type: "image", src: "images/56.PNG" },
    { type: "image", src: "images/57.JPG" },
    { type: "image", src: "images/58.JPG" },
    { type: "image", src: "images/WhatsApp Image 2026-02-14 at 2.02.50 AM.jpeg" },
  ];


  const startMusic = () => {
    audio.play().catch(() => { });
  };

  useEffect(() => {
    if (page !== "slideshow") return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(prev =>
          prev === media.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 600);

    }, 5200);

    return () => clearInterval(interval);
  }, [page, media.length]);


  const handleNoClick = () => {
    if (noClick === 1) {
      window.alert(`Be a good girl, will ya?
        Let's try again😪`);
    }
    noClick++;
    setYesButtonScale(prev => prev + 0.3);
  };

  const resetYesButton = () => setYesButtonScale(1);

  const bgClass = "min-h-screen bg-[#cfe9ff] flex items-center justify-center p-4 relative overflow-hidden";

  /* ================= LANDING ================= */

  if (page === 'landing') {
    return (
      <div className={bgClass}>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Oyee Tinnie, I made you something for you😋 Would you like to see?🤧
          </h1>

          <GifBox src="https://tenor.com/view/cosytales-couple-valentines-cute-in-love-gif-14747137074388245238.gif" />

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                startMusic();
                resetYesButton();
                setPage('yes-first');
              }}
              className="px-8 py-4 bg-blue-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
            >
              Yes
            </button>

            <button
              onClick={() => setPage('no-first')}
              className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= NO PAGE ================= */

  if (page === 'no-first') {
    window.alert("Badmash aurat!!!!🤬💢");

    return (
      <div className={bgClass}>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">How dare you? 😤🔫</h1>

          <GifBox src="https://tenor.com/view/cute-girl-cute-boy-pinch-cheeks-cheeks-cute-gif-15450168.gif" />

          <button
            onClick={() => setPage('landing')}
            className="px-8 py-4 bg-purple-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
          >
            Let's try again
          </button>
        </div>
      </div>
    );
  }

  /* ================= YES FIRST ================= */

  if (page === 'yes-first') {
    return (
      <div className={bgClass}>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            That's like a good girl. Following daddy's orders 🤪😘🥰😍
          </h1>

          <GifBox src="https://tenor.com/view/cosytales-love-chubby-valentine-shy-gif-13430689965623448142.gif" />

          <button
            onClick={() => setPage('valentine-question')}
            className="px-8 py-4 bg-blue-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  /* ================= MAIN QUESTION ================= */

  if (page === 'valentine-question') {
    return (
      <div className={bgClass}>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pratishtha Sharma, Will you be my Valentine? 🌚🔫
          </h1>

          <GifBox src="https://tenor.com/view/can-a-boy-girl-friendship-gif-3084412154319614407.gif" />

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setPage('final')}
              style={{ transform: `scale(${yesButtonScale})` }}
              className="px-8 py-4 bg-blue-500 text-white rounded-full text-xl font-semibold transition"
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= FINAL PAGE ================= */

  if (page === 'final') {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('images/Pratishtha1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <FallingFlowers />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="text-center relative z-10 text-white">
          <h1 className="text-6xl font-bold mb-6">Awww how sweeeeeet! 🥰💖</h1>

          <p className="text-3xl">💜 Happy Valentine's Day PS darling! 💜</p>

          <p className="text-xl">
            Thank you for coming into my life and becoming such an important part of it bhai. I honestly don’t know how I survived before you lmao, but I know one thing for sure. I can’t imagine surviving without you now.
            You are the sweetest and most precious gift my life has ever given me.
            Your smile is brighter than a field of sunflowers, the kind that can light up even my darkest days.
            Your black eyes hold more depth than the Mariana Trench endless, mysterious, and beautiful beyond words.
            Your mind is sharper than the finest Damascus blade, strong, thoughtful, and effortlessly brilliant.
            Your heart is kinder than a golden retriever puppy pure, warm, and full of unconditional love.
            You are more beautiful than the most breathtaking night sky in the Northern Hemisphere, the kind people travel across the world just to witness once.
            Your forehead is mas...
            Your forehead is mashallah🤪
            I love everything that you are, and everything you are still becoming, my tinnie. I want you to achieve every dream you’ve ever dared to dream, and I want to stand beside you while you do.
            I love you so, so, so much… more than these words could ever truly hold. 💜💜💜
          </p>
          <button
            onClick={() => setPage('slideshow')}
            className="mt-8 px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold hover:scale-110 transition"
          >
            See Our Memories 💜
          </button>
        </div>
      </div>
    );
  }

  /* ================= SLIDESHOW PAGE ================= */

  if (page === "slideshow") {
    return (
<div
  className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
  style={{
    background: "radial-gradient(circle at center, #111 0%, #000 80%)"
  }}
        onTouchStart={(e) => window.touchStartX = e.changedTouches[0].screenX}
        onTouchEnd={(e) => {
          const diff = e.changedTouches[0].screenX - window.touchStartX;
          if (diff > 50) {
            setCurrentIndex(prev => prev === 0 ? media.length - 1 : prev - 1);
          } else if (diff < -50) {
            setCurrentIndex(prev => prev === media.length - 1 ? 0 : prev + 1);
          }
        }}
      >
        <h1 className="text-4xl text-white font-bold mb-6">
          Our Memories 💜
        </h1>

        <div className="relative z-10 flex items-center justify-center w-full h-[75vh]">

          {media[currentIndex].type === "image" ? (
            <img
              key={media[currentIndex].src}
              src={media[currentIndex].src}
              alt="memory"
              className={`max-w-[90vw] max-h-[75vh] object-contain transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                }`}
            />
          ) : (
            <video
              key={media[currentIndex].src}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              preload="auto"
              className={`max-w-[90vw] max-h-[75vh] object-contain transition-opacity duration-500 ease-in-out ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <source src={media[currentIndex].src} type="video/mp4" />
            </video>

          )}

        </div>

        <div className="flex gap-2 mt-6">
          {media.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-pink-400" : "bg-gray-500"
                }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage("final")}
          className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-full hover:scale-110 transition"
        >
          ⬅ Back
        </button>
      </div>
    );
  }


  return null;
}

/* Render */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ValentineProposal />);
