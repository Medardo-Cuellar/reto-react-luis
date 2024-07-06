import Link from "next/link";

function Button({caption, href}) {
  return (
    
      <Link href={href} className="bg-purple-500 p-2 text-white rounded-lg">
        {caption}
      </Link>
    
  );
}

export default Button;
