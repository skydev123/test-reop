
export interface File {
  name?: string;
  type?: string;
  size?: string;
  items?: Array<File | Folder>;
  path?: string;
}

export interface Folder {
  name?: string;
  type?: string;
  size?: string;
  items?: Array<File | Folder>;
  path?: string;
}

export interface RootData {
  name?: string;
  type?: string;
  size?: string;
  items?: Array<File | Folder>;
  path?: string;
}

