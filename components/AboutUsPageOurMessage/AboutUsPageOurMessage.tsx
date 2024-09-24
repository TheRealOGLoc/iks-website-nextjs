import React from 'react'
import RichTextRenderer from '../BlogDetailPageContent/RichTextRenderer';

interface OurMessageProps {
  componentData: {
    __component: string;
    title: string,
    ourMessage: [],
    jobTitle: string,
    name: string
  };
}

export default function AboutUsPageOurMessage({ componentData }: OurMessageProps) {
  return (

    <div className="max-w-[900px] mx-auto text-left my-6 inter-font"> {/* Add padding for mobile */}
      <div className="p-5">
        <div>
          <h2 className="text-4xl text-center font-semibold mb-1 light-blue poppins-font"> {/* Responsive text size */}
            {componentData.title}
          </h2>
          <div className="text-lg italic text-gray-600 text-justify my-5"> {/* Responsive text size */}
            <RichTextRenderer nodes={componentData.ourMessage} />
          </div>
          <div className="text-xl font-semibold mb-2 "> {/* Adjust margin for mobile */}
            {componentData.jobTitle}
          </div>
          <div className="text-xl font-semibold mb-2 "> {/* Adjust margin for mobile */}
            {componentData.name}
          </div>
        </div>
      </div>
    </div>

  )
}
