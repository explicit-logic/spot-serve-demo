import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrashIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {todos.map(todo => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggle(todo.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}
              >
                {todo.completed && (
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                )}
              </motion.button>
              <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {todo.text}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              <TrashIcon className="w-5 h-5" />
            </motion.button>
          </motion.li>
        ))}
      </AnimatePresence>
      {todos.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-4"
        >
          No tasks yet. Add one above!
        </motion.p>
      )}
    </ul>
  );
}

export default TodoList;