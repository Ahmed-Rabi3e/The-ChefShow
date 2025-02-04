export default function AccountDetails() {
  return (
    <div>
      <h2 className="relative text-4xl font-restora_light mb-8 pb-2">
        Personal Information
        <div className="h-[1px] w-[284px] bg-gold-500 absolute bottom-0" />
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-base mb-2">Your Name</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder="Mohammed Ihap"
              readOnly
            />
            <button className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5">
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2">Email</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder="Mohamedihap12@gmail.com"
              readOnly
            />
            <button className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5">
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2">Phone Number</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder="+2010 70090950"
              readOnly
            />
            <button className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5">
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2">Password</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder="••••••••••••"
              readOnly
            />
            <button className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
