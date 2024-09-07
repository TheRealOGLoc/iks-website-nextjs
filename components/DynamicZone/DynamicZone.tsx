import React from 'react'

export interface ComponentData {
  __component: string,
  [key: string]: any
}

interface DynamicZoneProps {
  content: ComponentData[] | null;
  pageComponentMap: { [key: string]: React.ElementType };
  globalComponentMap: { [key: string]: React.ElementType };
}

export default function DynamicZone({content, pageComponentMap, globalComponentMap}: DynamicZoneProps) {
  const componentMap = {
    ...pageComponentMap,
    ...globalComponentMap
  }
  return (
    <>
      {
        content && content.map((data, index) => {
          const Component = componentMap[data.__component]
          return Component ? <Component key={index} componentData={data} /> : null
        })
      }
    </>
  )
}
