import React, { useRef, useState } from "react";
import { Button, Toast, Image } from "antd-mobile";

export interface UploadFile {
  uid: string;
  url?: string; // 上传后返回的 URL
  file?: File;  // 本地选择的文件
  status?: "uploading" | "done" | "error";
}

interface UploadProps {
  action: string; // 上传地址
  headers?: Record<string, string>;
  multiple?: boolean;
  maxCount?: number;
  onChange?: (files: UploadFile[]) => void;
}

const Upload: React.FC<UploadProps> = ({
  action,
  headers,
  multiple = false,
  maxCount = 5,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).slice(0, maxCount - fileList.length);
    const uploadItems: UploadFile[] = newFiles.map((file) => ({
      uid: Date.now() + Math.random().toString(36).slice(2),
      file,
      status: "uploading",
    }));

    setFileList((prev) => [...prev, ...uploadItems]);
    onChange?.([...fileList, ...uploadItems]);

    // 执行上传
    uploadItems.forEach((item) => uploadFile(item));
    e.target.value = ""; // 清空，避免重复选择同一个文件无效
  };

  const uploadFile = async (item: UploadFile) => {
    const formData = new FormData();
    formData.append("file", item.file!);

    try {
      const res = await fetch(action, {
        method: "POST",
        headers,
        body: formData,
      });
      if (!res.ok) throw new Error("上传失败");
      const data = await res.json();

      const newFileList = fileList.map((f) =>
        f.uid === item.uid
          ? { ...f, status: "done", url: data.url }
          : f
      );
      setFileList(newFileList);
      onChange?.(newFileList);
    } catch (err) {
      Toast.show({ content: "上传失败", position: "bottom" });
      const newFileList = fileList.map((f) =>
        f.uid === item.uid ? { ...f, status: "error" } : f
      );
      setFileList(newFileList);
      onChange?.(newFileList);
    }
  };

  const handleRemove = (uid: string) => {
    const newFileList = fileList.filter((f) => f.uid !== uid);
    setFileList(newFileList);
    onChange?.(newFileList);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {fileList.map((item) => (
          <div key={item.uid} style={{ position: "relative" }}>
            <Image
              src={item.url || URL.createObjectURL(item.file!)}
              width={80}
              height={80}
              fit="cover"
              style={{ borderRadius: 8 }}
            />
            <span
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                fontSize: 12,
                padding: "0 4px",
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={() => handleRemove(item.uid)}
            >
              ✕
            </span>
          </div>
        ))}

        {fileList.length < maxCount && (
          <Button
            onClick={handleClick}
            size="small"
            style={{ width: 80, height: 80 }}
          >
            上传
          </Button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Upload;
