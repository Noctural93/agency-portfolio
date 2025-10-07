import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const categories = ["Agency", "SAAS", "Banking", "Business", "Other"];

const SelectInContact = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full p-[18px] bg-[#33333333] rounded-[4px] border border-solid border-[#ffffff0d] text-white active:border-[#0099ff] focus:border-[#0099ff] cursor-pointer flex items-center justify-between transition-all ${
          open && "border-[#0099ff]"
        }`}
      >
        <span className="text-[#999999]">{selected || "Select a category"}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IoChevronDown size={18} className="text-[#999999]" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[105%] left-0 w-full bg-[#1f1f1f] border border-[#ffffff0d] rounded-[6px] overflow-hidden z-20 backdrop-blur-sm p-[6px]"
          >
            {categories.map((cat, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelected(cat);
                  setOpen(false);
                }}
                className="px-[10px] py-[8px] text-white hover:bg-[#0099ff33] transition-colors cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default SelectInContact;
