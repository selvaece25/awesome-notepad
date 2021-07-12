import React from 'react'
import { act,renderHook } from "@testing-library/react-hooks";
import useNote from '@/hooks/useNote';
import { ToastProvider } from 'react-toast-notifications'

describe("when rendered", () => {
  const wrapper:React.FC = ({ children }) => (
    <ToastProvider>{children}</ToastProvider>
  )
    it("Notes List will be empty", () => {
      const { result } = renderHook(() => useNote(), { wrapper });
      expect(result.current.notes).toEqual([]);
    });
    describe("when called the `setActiveNote` and ", () => {
      it("Passing values will updated on active note", async () => {
        const { result } = renderHook( () => useNote(), { wrapper });
        const mockActiveNote = { id: 3, note: 'TEST'};
        act(() => result.current.setActiveNote(mockActiveNote));
        expect(result.current.activeNote).toEqual(mockActiveNote);
      });
     it("addNote is disabled when setActiveNote called ", () => {
      const { result } = renderHook( () => useNote(), { wrapper });
      act(() => result.current.selectActiveNote(4));
      expect(result.current.isAddNote).toEqual(false);
    });
   })
});
