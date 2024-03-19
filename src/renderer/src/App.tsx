import { Content, NotePreviewList, RootLayout, Sidebar, ActionButtonsRow } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar className="p-2 bg-gray-800 ">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" />
      </Sidebar>
      <Content className="border-l-2  bg-gray-900 border-l-gray-700/70">Content</Content>
    </RootLayout>
  )
}

export default App
