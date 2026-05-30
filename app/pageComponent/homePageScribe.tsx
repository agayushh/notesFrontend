import { AudioLines, Download, KeyboardIcon, Upload } from "lucide-react";

export const Scribe = () => {
  const Items = [
    {
      title: "Voice Notes",
      icon: <AudioLines />,
    },

    {
      title: "Type",
      icon: <KeyboardIcon />,
    },
    {
      title: "Upload",
      icon: <Upload />,
    },
    {
      title: "Save",
      icon: <Download />,
    },
  ];

  return (
    <div>
      <div className="border h-115 w-200 rounded-xl p-4 bg-white border-black text-black   ">
        <span className="font-sans text-xl font-medium">
          Scribe is creating magic...
        </span>
        <div className="flex justify-between">
          {Items.map((item) => (
            <div
              key={item.title}
              className="flex gap-2 mt-7 text-gray-400 w-[75%]"
            >
              <div className="text-lg font-medium">{item.icon}</div>
              <div className=" font-sans text-lg font-medium ">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="h-84 mt-4 rounded-2xl overflow-hidden bg-purple-200"></div>
        </div>
      </div>
    </div>
  );
};
