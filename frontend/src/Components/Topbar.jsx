import { Button } from "./ui/Button"
import { Input } from "./ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minus,
  MoreHorizontal,
  Search,
  Settings,
  X,
} from "lucide-react"

export default function Topbar() {
  return (
    <div className="flex h-[40px] items-center justify-between border-b border-[#1e1e1e] bg-[#2d2d2d] px-2 text-sm text-[#cccccc]">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-[#ffffff1a]"
        >
          <div className="h-4 w-4 rounded bg-[#0098ff]" />
        </Button>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            File
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Edit
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Selection
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            View
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Go
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Run
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Terminal
          </Button>
          <Button
            variant="ghost"
            className="h-8 px-3 hover:bg-[#ffffff1a]"
          >
            Help
          </Button>

        </div>
      </div>

      <div className="flex flex-1 items-center justify-center space-x-2 px-4">
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-[#ffffff1a]"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-[#ffffff1a]"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative flex-1 max-w-[600px]">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform opacity-50" />
          <Input
            type="text"
            placeholder="code-editor"
            className="h-7 w-full bg-[#3d3d3d] pl-8 text-sm border-[#3d3d3d] placeholder:text-[#cccccc] placeholder:opacity-50 focus-visible:ring-1 focus-visible:ring-[#007fd4]"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-[#ffffff1a]"
        >
          <Settings className="h-4 w-4" />
        </Button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none hover:bg-[#ffffff1a]"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none hover:bg-[#ffffff1a]"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none hover:bg-[#ffffff1a]"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}