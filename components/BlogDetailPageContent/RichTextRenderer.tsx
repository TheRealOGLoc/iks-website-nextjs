import React from 'react';

type StrapiRichTextNode = {
  type:
    | 'text'
    | 'heading'
    | 'paragraph'
    | 'list'
    | 'list-item'
    | 'link'
    | 'quote'
    | 'code'
    | 'image';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  format?: 'unordered' | 'ordered';
  text?: string;
  url?: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  image?: {
    alternativeText: string;
    url: string;
    width?: number;
    height?: number;
  };
  children?: StrapiRichTextNode[];
};

type Props = {
  nodes: StrapiRichTextNode[];
};

export default function RichTextRenderer({ nodes }: Props) {
  const resolveRichText = (nodes: StrapiRichTextNode[]) => {
    return nodes.map((node, index) => resolveRichTextNode(node, index));
  };

  const resolveRichTextNode = (node: StrapiRichTextNode, key: React.Key): React.ReactNode => {
    const children = node.children ? resolveRichText(node.children) : null;

    switch (node.type) {
      case 'heading':
        const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={key}>{children}</HeadingTag>;

      case 'text':
        let textElement: React.ReactNode = node.text || '';

        if (node.bold) textElement = <b key={key}>{textElement}</b>;
        if (node.italic) textElement = <i key={key}>{textElement}</i>;
        if (node.underline) textElement = <u key={key}>{textElement}</u>;
        if (node.code) textElement = <code key={key}>{textElement}</code>;
        if (node.strikethrough) textElement = <s key={key}>{textElement}</s>;

        return <span key={key}>{textElement}</span>;

      case 'paragraph':
        return <p className='my-[15px]' key={key}>{children}</p>;

      case 'link':
        return (
          <a href={node.url} key={key}>
            {children}
          </a>
        );

      case 'list':
        const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
        const listClass = node.format === 'ordered' ? 'list-decimal' : 'list-disc'; // Use Tailwind for styling
        return (
          <ListTag key={key} className={listClass} style={{ paddingLeft: '20px' }}>
            {children}
          </ListTag>
        );

      case 'list-item':
        return <li className='my-1' key={key}>{children}</li>;

      case 'quote':
        return <blockquote key={key}>{children}</blockquote>;

      case 'code':
        return <pre key={key}>{children}</pre>;

      case 'image':
        if (node.image) {
          return (
            <img
              key={key}
              src={node.image.url}
              alt={node.image.alternativeText}
              width={node.image.width}
              height={node.image.height}
            />
          );
        }
        break;

      default:
        return null;
    }
  };

  return <div>{resolveRichText(nodes)}</div>;
}
