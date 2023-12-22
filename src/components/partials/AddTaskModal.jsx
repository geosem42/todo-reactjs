import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function AddTaskModal({ tasks, setTasks, setHighlightedId }) {
  let [isOpen, setIsOpen] = useState(false)
  let [title, setTitle] = useState('')
  let [isInputEmpty, setIsInputEmpty] = useState(false);

  function closeModal() {
    setIsOpen(false)
    setTitle('')
    setIsInputEmpty(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  function addTask() {
    if (title.trim() === '') {
      setIsInputEmpty(true);
      return;
    }

    const newId = Math.max(...tasks.map(task => task.id)) + 1;
    setTasks(currentTasks => [...currentTasks, { id: newId, title, selected: false }]);
    setHighlightedId(newId);
    closeModal()
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-700 rounded-lg hover:bg-indigo-800 active:bg-indigo-700 md:text-sm">
        <PlusCircleIcon className="h-6 w-6 text-white mr-2" />
        Add Task
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Add New Task
                  </Dialog.Title>

                  <div className="mt-4">
                    <input type="text" value={title}
                            onChange={e => {
                              setTitle(e.target.value);
                              setIsInputEmpty(e.target.value.trim() === '');
                            }}
                      className={`bg-gray-50 border ${isInputEmpty ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} text-gray-900 text-sm rounded-lg  focus-visible:outline-0 block w-full p-2.5`} placeholder="Install Docker..." />
                    <p className={`mt-1 text-red-500 text-xs ${isInputEmpty ? '' : 'hidden'}`}>This field is required.</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button onClick={addTask} type="button" className="text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-2.5 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:bg-indigo-100 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
