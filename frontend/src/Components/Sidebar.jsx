'use client'

import * as React from "react"
import {
  Files,
  Search,
  GitBranch,
  Play,
  Package,
  Monitor,
  History,
  MessageSquare,
  PieChart,
  User2,
  Settings,
  ChevronRight,
  ChevronDown,
  FolderClosed,
  RefreshCw,
  Save,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { cn } from "../lib/utils"

const fileData = [
  {
    name: "CODE-EDITOR",
    type: "folder",
    children: [
      {
        name: "frontend",
        type: "folder",
        children: [
          {
            name: "src",
            type: "folder",
            children: [
              {
                name: "Components",
                type: "folder",
                children: [
                  { name: "Sidebar.jsx", type: "file", status: "U" },
                  { name: "Topbar.jsx", type: "file", status: "U" },
                ],
              },
              { name: "Helper", type: "folder" },
              { name: "lib", type: "folder" },
              {
                name: "Pages",
                type: "folder",
                children: [
                  { name: "Dashboard", type: "folder" },
                  {
                    name: "Editor",
                    type: "folder",
                    children: [
                      { name: "CoreEditor.jsx", type: "file", status: "U" },
                      { name: "FileTabEditor.jsx", type: "file", status: "U" },
                      { name: "index.jsx", type: "file", status: "M" },
                      { name: "MainSection.jsx", type: "file", status: "U" },
                    ],
                  },
                  { name: "Landing", type: "folder" },
                ],
              },
            ],
          },
          { name: "App.jsx", type: "file" },
          { name: "index.css", type: "file", status: "M" },
          { name: "main.jsx", type: "file" },
          { name: "router.jsx", type: "file" },
        ],
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "eslint.config.js", type: "file" },
      { name: "index.html", type: "file" },
    ],
  },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('files')
  const [isExplorerOpen, setIsExplorerOpen] = React.useState(true)
  const [expandedFolders, setExpandedFolders] = React.useState([
    "CODE-EDITOR",
    "frontend",
    "src",
    "Components",
    "Pages",
    "Editor",
  ])

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    )
  }

  const items = [
    { id: 'files', icon: Files, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'git', icon: GitBranch, label: 'Source Control', badge: '21' },
    { id: 'debug', icon: Play, label: 'Run and Debug' },
    { id: 'extensions', icon: Package, label: 'Extensions' },
    { id: 'remote', icon: Monitor, label: 'Remote Explorer' },
    { id: 'timeline', icon: History, label: 'Timeline' },
    { id: 'comments', icon: MessageSquare, label: 'Comments' },
    { id: 'stats', icon: PieChart, label: 'Statistics' },
  ]

  const bottomItems = [
    { id: 'account', icon: User2, label: 'Accounts' },
    { id: 'settings', icon: Settings, label: 'Manage' },
  ]

  const FileTreeItem = ({ item, depth = 0 }) => {
    const isFolder = item.type === "folder"
    const isExpanded = expandedFolders.includes(item.name)

    return (
      <div>
        <div
          className={`group flex items-center px-2 py-0.5 hover:bg-[#37373d] ${
            depth ? "ml-4" : ""
          }`}
          role="button"
          tabIndex={0}
          onClick={() => isFolder && toggleFolder(item.name)}
          onKeyDown={(e) => e.key === "Enter" && isFolder && toggleFolder(item.name)}
        >
          {isFolder ? (
            isExpanded ? (
              <ChevronDown className="h-4 w-4 shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 shrink-0" />
            )
          ) : (
            <span className="w-4" />
          )}
          {isFolder ? (
            <FolderClosed className="ml-0.5 mr-1.5 h-4 w-4 text-[#dcb67a]" />
          ) : (
            <div className="ml-0.5 mr-1.5 h-4 w-4 text-[#519aba]">{"{}"}</div>
          )}
          <span className="text-sm text-[#cccccc]">{item.name}</span>
          {item.status && (
            <span className="ml-auto text-xs text-[#cccccc]">{item.status}</span>
          )}
        </div>
        {isFolder && isExpanded && item.children && (
          <div>
            {item.children.map((child) => (
              <FileTreeItem key={child.name} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex h-[90vh]">
      <div className="flex h-full w-12 flex-col justify-between border-r border-[#1e1e1e] bg-[#252526]">
        <div className="flex flex-col h-full">
          {items.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className={cn(
                "relative h-12 w-12 rounded-none hover:bg-[#37373d]",
                activeItem === item.id && "after:absolute after:left-0 after:top-0 after:h-full after:w-[2px] after:bg-[#007acc]"
              )}
              onClick={() => {
                setActiveItem(item.id)
                if (item.id === 'files') {
                  setIsExplorerOpen(!isExplorerOpen)
                } else {
                  setIsExplorerOpen(false)
                }
              }}
            >
              <item.icon className={cn(
                "h-5 w-5",
                activeItem === item.id ? "text-white" : "text-[#858585]"
              )} />
              {item.badge && (
                <span className="absolute right-1 top-2 flex h-4 min-w-4 items-center justify-center rounded bg-[#007acc] px-1 text-xs text-white">
                  {item.badge}
                </span>
              )}
              <span className="sr-only">{item.label}</span>
            </Button>
          ))}
        </div>
        <div className="flex flex-col">
          {bottomItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className={cn(
                "relative h-12 w-12 rounded-none hover:bg-[#37373d]",
                activeItem === item.id && "after:absolute after:left-0 after:top-0 after:h-full after:w-[2px] after:bg-[#007acc]"
              )}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className={cn(
                "h-5 w-5",
                activeItem === item.id ? "text-white" : "text-[#858585]"
              )} />
              <span className="sr-only">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
      {isExplorerOpen && (
        <div className="w-64 border-r border-[#1e1e1e] bg-[#252526]">
          <div className="flex h-[35px] items-center justify-between px-2">
            <span className="text-xs text-[#cccccc]">EXPLORER</span>
            <div className="flex items-center space-x-0.5">
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-[#37373d]">
                <Files className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-[#37373d]">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-[#37373d]">
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-[#37373d]">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[calc(100%-35px)] p-2">
            {fileData.map((item) => (
              <FileTreeItem key={item.name} item={item} />
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  )
}
