import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';
import { GetData } from '@/utilities/get-components-data';

interface MetaTag {
  id: number;
  attributeName: string;
  attribute: string;
  content: string;
}

interface Canonical {
  id: number;
  rel: string;
  href: string | null;
}

interface SEOProps {
  componentData: {
    __component: string;
    title: {
      id: number,
      title: string
    };
    charSet: {
      id: number,
      attribute: string
    };
    metaTag: MetaTag[];
    canonical: Canonical[];
  };
}

