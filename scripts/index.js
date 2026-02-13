const { useState } = React;

/* 🎵 Global Background Music */
const audio = new Audio("01 - Victor Lundberg - We Are Meant To Be.m4a");
audio.loop = true;
audio.volume = 0.3;

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

  const startMusic = () => {
    audio.play().catch(() => {});
  };

  const handleNoClick = () => {
    if (noClick === 1){
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

          <p className="text-3xl">💜 Happy Valentine's Day PS! 💜</p>

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
        </div>
      </div>
    );
  }

  return null;
}

/* Render */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ValentineProposal />);
