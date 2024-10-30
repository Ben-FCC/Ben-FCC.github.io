from nltools.data import Brain_Data
from nltools.plotting import plot_brain
import matplotlib.pyplot as plt
import glob

brain_model_paths = glob.glob('assets/brain_models/*')
for m in brain_model_paths:
    plot_brain(Brain_Data(m), how='glass', save='assets/brain_model_figures/brain_model_{}.png'.format(m.split('/')[-1].split('.')[0]))