import {
    AlertCircle,
    Bell,
    Bug,
    GitBranch,
    GitCompare,
    Globe,
    Settings,
    Zap,
  } from "lucide-react"
  import { Button } from "./ui/Button"
  import { Separator } from "./ui/Separator"
  
  export default function Bottombar() {
    return (
      <div className="flex h-[22px] items-center justify-between bg-[#007acc] px-1 text-[12px] text-white/90">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <GitBranch className="mr-1.5 h-3.5 w-3.5" />
            main
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <GitCompare className="mr-1.5 h-3.5 w-3.5" />
            0
            <Separator orientation="vertical" className="mx-2 h-3.5" />
            0
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <AlertCircle className="mr-1.5 h-3.5 w-3.5" />0
            <Separator orientation="vertical" className="mx-2 h-3.5" />0
          </Button>
        </div>
  
        <div className="flex items-center divide-x divide-white/20">
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            Ln 43, Col 7
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            Spaces: 4
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            UTF-8
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            CRLF
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            {'{}'} TypeScript JSX
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            Go Live
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <Settings className="mr-1.5 h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <Zap className="mr-1.5 h-3.5 w-3.5" />
            Prettier
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-full rounded-none px-2 py-0 hover:bg-white/10"
          >
            <Bell className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    )
  }